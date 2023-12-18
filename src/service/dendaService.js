import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createDendaValidation } from '../validation/dendaValidation.js';

const getDendaService = async () => {
  return prismaClient.denda.findMany({
    select: {
      id_denda: true,
      nominal: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const searchDendaService = async (request) => {
  const { nominal } = request;
  const nominalInt = parseInt(nominal);
  const denda = await prismaClient.denda.findFirst({
    where: {
      nominal: {
        equals: nominalInt,
      },
    },
    select: {
      id_denda: true,
      nominal: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!denda) {
    throw new ResponseError(404, 'Nominal Tidak Ditemukan');
  }

  return denda;
};


const createDendaService = async (request) => {
  const denda = await validation(createDendaValidation, request);
  const dendaExist = await prismaClient.denda.count({
    where: {
      nominal: denda.nominal,
    },
  });

  if (dendaExist === 1) {
    throw new ResponseError(409, 'Nominal Sudah Ada');
  }

  return prismaClient.denda.create({
    data: denda,
    select: {
      id_denda: true,
      nominal: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export default {
  getDendaService,
  searchDendaService,
  createDendaService,
};