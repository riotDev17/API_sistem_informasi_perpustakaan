import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createKelasValidation } from '../validation/kelasValidation.js';


/**
 * @openapi
 * components:
 *  schemas:
 *    AddKelas:
 *      type: object
 *      required:
 *        - nama_kelas
 *      properties:
 *        nama_kelas:
 *          type: string
 *          description: nama kelas
 *    AddKelasSuccess:
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
 *            id_kelas:
 *              type: string
 *              description: id kelas
 *            nama_kelas:
 *              type: string
 *              description: nama kelas
 *            createdAt:
 *              type: string
 *              description: create date kelas
 *            updatedAt:
 *              type: string
 *              description: update date kelas
 *    AddKelasBadRequest:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Bad Request
 *          description: Bad Request
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: Bad Request
 *    AddKelasUnauthorized:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: Unauthorized
 *    AddKelasConflict:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Conflict
 *          description: Conflict
 *        message:
 *          type: string
 *          default: Message Conflict
 *          description: Conflict
 *
 *
 * */
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

export default { createKelasService };