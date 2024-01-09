import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import {
  createBukuValidation,
  getBukuValidation,
  updateBukuValidation,
} from '../validation/bukuValidation.js';
import fs from 'fs';

const getBukuService = async () => {
  return prismaClient.buku.findMany({
    select: {
      id_buku: true,
      judul_buku: true,
      pengarang: true,
      penerbit: true,
      tahun_terbit: true,
      deskripsi: true,
      stok_buku: true,
      foto_buku: true,
      rak_buku: {
        select: {
          id_rak_buku: true,
          nama_rak_buku: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

const searchBukuService = async (request) => {
  const { judul_buku } = request;
  const buku = await prismaClient.buku.findMany({
    where: {
      judul_buku: {
        contains: judul_buku,
        mode: 'insensitive',
      },
    },
    select: {
      id_buku: true,
      judul_buku: true,
      pengarang: true,
      penerbit: true,
      tahun_terbit: true,
      deskripsi: true,
      stok_buku: true,
      foto_buku: true,
      rak_buku: {
        select: {
          id_rak_buku: true,
          nama_rak_buku: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });

  if (buku.length === 0) {
    throw new ResponseError(404, 'Buku Tidak Ditemukan');
  }

  return buku;
};

const createBukuService = async (request) => {
  const buku = await validation(createBukuValidation, request);
  const isBukuExist = await prismaClient.buku.count({
    where: {
      judul_buku: buku.judul_buku,
    },
  });

  if (isBukuExist === 1) {
    throw new ResponseError(409, 'Buku sudah ada');
  }

  return prismaClient.buku.create({
    data: buku,
    select: {
      id_buku: true,
      judul_buku: true,
      pengarang: true,
      penerbit: true,
      tahun_terbit: true,
      deskripsi: true,
      stok_buku: true,
      foto_buku: true,
      rak_buku: {
        select: {
          id_rak_buku: true,
          nama_rak_buku: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });
};

const getBukuByIdService = async (bukuId) => {
  bukuId = await validation(getBukuValidation, bukuId);
  const buku = await prismaClient.buku.findFirst({
    where: {
      id_buku: bukuId,
    },
    select: {
      id_buku: true,
      judul_buku: true,
      pengarang: true,
      penerbit: true,
      tahun_terbit: true,
      deskripsi: true,
      stok_buku: true,
      foto_buku: true,
      rak_buku: {
        select: {
          id_rak_buku: true,
          nama_rak_buku: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!buku) {
    throw new ResponseError(404, 'Buku Tidak Ditemukan');
  }

  return buku;
};

const updateBukuService = async (request) => {
  const buku = await validation(updateBukuValidation, request);
  const isBukuExist = await prismaClient.buku.count({
    where: {
      id_buku: buku.id_buku,
    },
  });

  if (isBukuExist !== 1) {
    throw new ResponseError(404, 'Buku Tidak Ditemukan');
  }

  return prismaClient.buku.update({
    where: {
      id_buku: buku.id_buku,
    },
    data: buku,
    select: {
      id_buku: true,
      judul_buku: true,
      pengarang: true,
      penerbit: true,
      tahun_terbit: true,
      deskripsi: true,
      stok_buku: true,
      foto_buku: true,
      rak_buku: {
        select: {
          id_rak_buku: true,
          nama_rak_buku: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });
};

const deleteBukuService = async (bukuId) => {
  bukuId = await validation(getBukuValidation, bukuId);
  const bukuExist = await prismaClient.buku.count({
    where: {
      id_buku: bukuId,
    },
  });

  if (bukuExist !== 1) {
    throw new ResponseError(404, 'Buku Tidak Ditemukan');
  }

  // Dapatkan informasi buku sebelum dihapus
  const buku = await prismaClient.buku.findUnique({
    where: {
      id_buku: bukuId,
    },
  });

  // Hapus buku dari database
  await prismaClient.buku.delete({
    where: {
      id_buku: bukuId,
    },
  });

  // Hapus file foto_buku jika ada
  if (buku && buku.foto_buku) {
    const filePath = `./images/${buku.foto_buku}`;

    // Gunakan fs.unlink untuk menghapus file
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Gagal menghapus file:', err);
      } else {
        console.log('File berhasil dihapus');
      }
    });
  }

  // Kembalikan sesuatu, mungkin informasi sukses atau yang lainnya

};


export default {
  getBukuService,
  createBukuService,
  searchBukuService,
  getBukuByIdService,
  updateBukuService,
  deleteBukuService,
};
