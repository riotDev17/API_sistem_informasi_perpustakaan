import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createKelasValidation, getKelasValidation, updateKelasValidation } from '../validation/kelasValidation.js';

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

const getKelasByIdService = async (kelasId) => {
  kelasId = await validation(getKelasValidation, kelasId);
  const kelas = await prismaClient.kelas.findFirst({
    where: {
      id_kelas: kelasId,
    },
    select: {
      id_kelas: true,
      nama_kelas: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!kelas) {
    throw new ResponseError(404, 'Kelas tidak ditemukan');
  }

  return kelas;
};

const updateKelasService = async (request) => {
  const kelas = await validation(updateKelasValidation, request);
  const kelasExist = await prismaClient.kelas.count({
    where: {
      id_kelas: kelas.id_kelas,
    },
  });

  const nameKelasExist = await prismaClient.kelas.count({
    where: {
      nama_kelas: kelas.nama_kelas,
    },
  });

  if (kelasExist !== 1) {
    throw new ResponseError(404, 'Kelas tidak ditemukan');
  } else if (nameKelasExist === 1) {
    throw new ResponseError(409, 'Kelas sudah ada');
  }

  return prismaClient.kelas.update({
    where: {
      id_kelas: kelas.id_kelas,
    },
    data: kelas,
    select: {
      id_kelas: true,
      nama_kelas: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const deleteKelasService = async (kelasId) => {
  kelasId = await validation(getKelasValidation, kelasId);
  const kelasExist = await prismaClient.kelas.count({
    where: {
      id_kelas: kelasId,
    },
  });

  if (kelasExist !== 1) {
    throw new ResponseError(404, 'Kelas tidak ditemukan');
  }

  return prismaClient.kelas.delete({
    where: {
      id_kelas: kelasId,
    },
  });

};

export default {
  getKelasService,
  searchKelasService,
  createKelasService,
  getKelasByIdService,
  updateKelasService,
  deleteKelasService,
};