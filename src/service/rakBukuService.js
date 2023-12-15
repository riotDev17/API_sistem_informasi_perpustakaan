import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import {
  createRakBukuValidation,
  getRakBukuValidation,
  updateRakBukuValidation,
} from '../validation/rakBukuValidation.js';

const getRakBukuService = async () => {
  return prismaClient.rakBuku.findMany({
    select: {
      id_rak_buku: true,
      nama_rak_buku: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

const searchRakBukuService = async (request) => {
  const { nama_rak_buku } = request;
  const rakBuku = await prismaClient.rakBuku.findMany({
    where: {
      nama_rak_buku: {
        contains: nama_rak_buku,
      },
    },
    select: {
      id_rak_buku: true,
      nama_rak_buku: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (rakBuku.length === 0) {
    throw new ResponseError(404, 'Rak Buku tidak ditemukan');
  }

  return rakBuku;
};

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

const getRakBukuByIdService = async (rakBukuId) => {
  rakBukuId = await validation(getRakBukuValidation, rakBukuId);
  const rakBuku = await prismaClient.rakBuku.findUnique({
    where: {
      id_rak_buku: rakBukuId,
    },
    select: {
      id_rak_buku: true,
      nama_rak_buku: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!rakBuku) {
    throw new ResponseError(404, 'Rak Buku tidak ditemukan');
  }

  return rakBuku;
};

const updateRakBukuService = async (request) => {
  const rakBuku = await validation(updateRakBukuValidation, request);
  const rakBukuExist = await prismaClient.rakBuku.count({
    where: {
      id_rak_buku: rakBuku.id_rak_buku,
    },
  });

  const nameRakBukuExist = await prismaClient.rakBuku.count({
    where: {
      nama_rak_buku: rakBuku.nama_rak_buku,
    },
  });

  if (rakBukuExist !== 1) {
    throw new ResponseError(404, 'Rak Buku tidak ditemukan');
  } else if (nameRakBukuExist === 1) {
    throw new ResponseError(409, 'Rak Buku sudah ada');
  }

  return prismaClient.rakBuku.update({
    where: {
      id_rak_buku: rakBuku.id_rak_buku,
    },
    data: rakBuku,
    select: {
      id_rak_buku: true,
      nama_rak_buku: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const deleteRakBukuService = async (rakBukuId) => {
  rakBukuId = await validation(getRakBukuValidation, rakBukuId);
  const rakBukuExist = await prismaClient.rakBuku.count({
    where: {
      id_rak_buku: rakBukuId,
    },
  });

  if (rakBukuExist !== 1) {
    throw new ResponseError(404, 'Rak Buku tidak ditemukan');
  }

  return prismaClient.rakBuku.delete({
    where: {
      id_rak_buku: rakBukuId,
    },
  });
};

export default {
  searchRakBukuService,
  getRakBukuService,
  createRakBukuService,
  getRakBukuByIdService,
  updateRakBukuService,
  deleteRakBukuService,
};