import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createKelasValidation } from '../validation/kelasValidation.js';

const getKelasService = async () => {
  return prismaClient.kelas.findMany({
    select: {
      id_kelas: true,
      nama_kelas: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

const searchKelasService = async (request) => {
  const { nama_kelas } = request;
  const kelas = await prismaClient.kelas.findMany({
    where: {
      nama_kelas: {
        contains: nama_kelas,
      },
    },
    select: {
      id_kelas: true,
      nama_kelas: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (kelas.length === 0) {
    throw new ResponseError(404, 'Kelas tidak ditemukan');
  }

  return kelas;
};


const createKelasService = async (request) => {
  const kelas = await validation(createKelasValidation, request);
  const kelasExist = await prismaClient.kelas.count({
    where: {
      nama_kelas: kelas.nama_kelas,
    },
  });

  if (kelasExist === 1) {
    throw new ResponseError(409, 'Kelas sudah ada');
  }

  return prismaClient.kelas.create({
    data: kelas,
    select: {
      id_kelas: true,
      nama_kelas: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export default { getKelasService, searchKelasService, createKelasService };