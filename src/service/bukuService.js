import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createBukuValidation } from '../validation/bukuValidation.js';

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


export default {
  getBukuService,
  createBukuService,
};