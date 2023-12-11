import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import {
  getAgamaValidation,
  createAgamaValidation,
  deleteAgamaValidation,
  updateAgamaValidation,
} from '../validation/agamaValidation.js';

/**
 * @openapi
 * components:
 *  schemas:
 *    GetAgamaSuccess:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 *        data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id_agama:
 *                type: string
 *                description: id agama
 *              nama_agama:
 *                type: string
 *                description: nama agama
 *              createdAt:
 *                type: string
 *                description: created at
 *              updatedAt:
 *                type: string
 *                description: updated at
 *    GetAgamaUnauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: message
 *
 * */
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

/**
 * @openapi
 * components:
 *  schemas:
 *    SearchAgama:
 *      type: object
 *      required:
 *        - nama_agama
 *      properties:
 *        nama_agama:
 *          type: string
 *          description: nama agama
 *    SearchAgamaSuccess:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 *        data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id_agama:
 *                type: string
 *                description: id agama
 *              nama_agama:
 *                type: string
 *                description: nama agama
 *              createdAt:
 *                type: string
 *                description: created at
 *              updatedAt:
 *                type: string
 *                description: updated at
 *    SearchAgamaUnauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: message
 *    SearchAgamaNotFound:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 *
 *
 *
 * */
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

/**
 * @openapi
 * components:
 *  schemas:
 *    AddAgama:
 *      type: object
 *      required:
 *        - nama_agama
 *      properties:
 *        nama_agama:
 *          type: string
 *          description: nama agama
 *    AddAgamaSuccess:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 *        data:
 *          type: object
 *          properties:
 *            id_agama:
 *              type: string
 *              description: id agama
 *            nama_agama:
 *              type: string
 *              description: nama agama
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    AddAgamaUnauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: message
 *    AddAgamaBadRequest:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Error
 *          description: Failed
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: message
 *
 *
 *
 * */
const createAgamaService = async (request) => {
  const agama = await validation(createAgamaValidation, request);
  const agamaExist = await prismaClient.agama.count({
    where: {
      nama_agama: agama.nama_agama,
    },
  });

  if (agamaExist === 1) {
    throw new ResponseError(400, 'Nama Agama Sudah Ada');
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

/**
 * @openapi
 * components:
 *  schemas:
 *    GetAgamaByIdSuccess:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 *        data:
 *          type: object
 *          properties:
 *            id_agama:
 *              type: string
 *              description: id agama
 *            nama_agama:
 *              type: string
 *              description: nama agama
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    GetAgamaByIdUnauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: message
 *    GetAgamaByIdNotFound:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 *
 * */
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

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateAgama:
 *      type: object
 *      required:
 *        - nama_agama
 *      properties:
 *        nama_agama:
 *          type: string
 *          description: nama agama
 *    UpdateAgamaSuccess:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 *        data:
 *          type: object
 *          properties:
 *            id_agama:
 *              type: string
 *              description: id agama
 *            nama_agama:
 *              type: string
 *              description: nama agama
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    UpdateAgamaUnauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: message
 *    UpdateAgamaBadRequest:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Bad Request
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: message
 *    UpdateAgamaNotFound:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 * */
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
    throw new ResponseError(400, 'Nama Agama Sudah Ada');
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

/**
 * @openapi
 * components:
 *  schemas:
 *    DeleteAgamaSuccess:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 *    DeleteAgamaUnauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: message
 *    DeleteAgamaNotFound:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Not Found
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Not Found
 *          description: message
 *
 *
 * */
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