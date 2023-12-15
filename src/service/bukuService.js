import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createBukuValidation, getBukuValidation, updateBukuValidation } from '../validation/bukuValidation.js';

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

  const nameBukuExist = await prismaClient.buku.count({
    where: {
      judul_buku: buku.judul_buku,
    },
  });

  if (isBukuExist !== 1) {
    throw new ResponseError(404, 'Buku Tidak Ditemukan');
  } else if (nameBukuExist === 1) {
    throw new ResponseError(409, 'Buku Sudah Ada');
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

  return prismaClient.buku.delete({
    where: {
      id_buku: bukuId,
    },
  });
};

export default {
  getBukuService,
  createBukuService,
  searchBukuService,
  getBukuByIdService,
  updateBukuService,
  deleteBukuService,
};