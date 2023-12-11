import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import {
  getAgamaValidation,
  createAgamaValidation,
  deleteAgamaValidation,
  updateAgamaValidation,
} from '../validation/agamaValidation.js';

const getAgamaService = async () => {
  return prismaClient.agama.findMany({
    select: {
      id_agama: true,
      nama_agama: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

const searchAgamaService = async (request) => {
  const { nama_agama } = request;
  const agama = await prismaClient.agama.findMany({
    where: {
      nama_agama: {
        contains: nama_agama,
      },
    },
    select: {
      id_agama: true,
      nama_agama: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (agama.length === 0) {
    throw new ResponseError(404, 'Agama Tidak Ditemukan');
  }

  return agama;
};

const createAgamaService = async (request) => {
  const agama = await validation(createAgamaValidation, request);
  const agamaExist = await prismaClient.agama.count({
    where: {
      nama_agama: agama.nama_agama,
    },
  });

  if (agamaExist === 1) {
    throw new ResponseError(409, 'Nama Agama Sudah Ada');
  }

  return prismaClient.agama.create({
    data: agama,
    select: {
      id_agama: true,
      nama_agama: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};


const getAgamaByIdService = async (agamaId) => {
  agamaId = await validation(getAgamaValidation, agamaId);
  const agama = await prismaClient.agama.findFirst({
    where: {
      id_agama: agamaId,
    },
    select: {
      id_agama: true,
      nama_agama: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!agama) {
    throw new ResponseError(404, 'Agama Tidak Ditemukan');
  }

  return agama;
};


const updateAgamaService = async (request) => {
  const agama = await validation(updateAgamaValidation, request);
  const agamaExist = await prismaClient.agama.count({
    where: {
      id_agama: agama.id_agama,
    },
  });

  const nameAgamaExist = await prismaClient.agama.count({
    where: {
      nama_agama: agama.nama_agama,
    },
  });

  if (agamaExist !== 1) {
    throw new ResponseError(404, 'Agama Tidak Ditemukan');
  } else if (nameAgamaExist === 1) {
    throw new ResponseError(409, 'Nama Agama Sudah Ada');
  }

  return prismaClient.agama.update({
    where: {
      id_agama: agama.id_agama,
    },
    data: agama,
    select: {
      id_agama: true,
      nama_agama: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};


const deleteAgamaService = async (agamaId) => {
  agamaId = await validation(deleteAgamaValidation, agamaId);
  const agamaExist = await prismaClient.agama.count({
    where: {
      id_agama: agamaId,
    },
  });

  if (agamaExist !== 1) {
    throw new ResponseError(404, 'Agama Tidak Ditemukan');
  }

  return prismaClient.agama.delete({
    where: {
      id_agama: agamaId,
    },
  });
};

export default {
  getAgamaService,
  getAgamaByIdService,
  searchAgamaService,
  createAgamaService,
  updateAgamaService,
  deleteAgamaService,
};