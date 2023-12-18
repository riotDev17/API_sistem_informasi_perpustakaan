import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createDendaValidation } from '../validation/dendaValidation.js';

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
  createDendaService,
};