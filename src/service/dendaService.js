import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createDendaValidation, getDendaValidation, updateDendaValidation } from '../validation/dendaValidation.js';

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

const getDendaByIdService = async (dendaId) => {
  dendaId = await validation(getDendaValidation, dendaId);
  const denda = await prismaClient.denda.findFirst({
    where: {
      id_denda: dendaId,
    },
    select: {
      id_denda: true,
      nominal: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!denda) {
    throw new ResponseError(404, 'Denda Tidak Ditemukan');
  }

  return denda;
};

const updateDendaService = async (request) => {
  const denda = await validation(updateDendaValidation, request);
  const dendaExist = await prismaClient.denda.count({
    where: {
      id_denda: denda.id_denda,
    },
  });

  const nominalDendaExist = await prismaClient.denda.count({
    where: {
      nominal: denda.nominal,
    },
  });

  if (dendaExist !== 1) {
    throw new ResponseError(404, 'Denda Tidak Ditemukan');
  } else if (nominalDendaExist === 1) {
    throw new ResponseError(409, 'Nominal Sudah Ada');
  }

  return prismaClient.denda.update({
    where: {
      id_denda: denda.id_denda,
    },
    data: denda,
    select: {
      id_denda: true,
      nominal: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const deleteDendaService = async (dendaId) => {
  dendaId = await validation(getDendaValidation, dendaId);
  const dendaExist = await prismaClient.denda.count({
    where: {
      id_denda: dendaId,
    },
  });

  if (dendaExist !== 1) {
    throw new ResponseError(404, 'Denda Tidak Ditemukan');
  }

  return prismaClient.denda.delete({
    where: {
      id_denda: dendaId,
    },
  });
};

export default {
  getDendaService,
  searchDendaService,
  createDendaService,
  getDendaByIdService,
  updateDendaService,
  deleteDendaService,
};