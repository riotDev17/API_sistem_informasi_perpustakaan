import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createRakBukuValidation } from '../validation/rakBukuValidation.js';


const createRakBukuService = async (request) => {
  const rakBuku = await validation(createRakBukuValidation, request);
  const isRakBukuExist = await prismaClient.rakBuku.count({
    where: {
      nama_rak_buku: rakBuku.nama_rak_buku,
    },
  });

  if (isRakBukuExist === 1) {
    throw new ResponseError(409, 'Rak Buku sudah ada');
  }

  return prismaClient.rakBuku.create({
    data: rakBuku,
    select: {
      id_rak_buku: true,
      nama_rak_buku: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export default {
  createRakBukuService,
};