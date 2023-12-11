import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import {
  getAdminValidation,
  loginAdminValidation,
  logoutAdminValidation,
  registerAdminValidation,
  updateAdminValidation,
} from '../validation/adminValidation.js';
import uploadFile from '../utils/multer.js';

/**
 * @openapi
 * components:
 *  schemas:
 *    RegisterAdmin:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *          description: username admin
 *        password:
 *          type: string
 *          description: password admin
 *    RegisterAdminSuccess:
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
 *            id_admin:
 *              type: string
 *              description: id admin
 *            username:
 *              type: string
 *              description: username admin
 *            foto_admin:
 *              type: string
 *              description: foto admin
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    RegisterAdminFailed:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Bad Request
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: Message
 */
const registerAdminService = async (request) => {
  const admin = await validation(registerAdminValidation, request);
  const isUsernameExist = await prismaClient.admin.count({
    where: {
      username: admin.username,
    },
  });

  if (isUsernameExist === 1) {
    throw new ResponseError(400, 'Username sudah terdaftar');
  }

  admin.password = await bcrypt.hash(admin.password, 10);
  return prismaClient.admin.create({
    data: admin,
    select: {
      id_admin: true,
      username: true,
      foto_admin: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

/**
 * @openapi
 * components:
 *  schemas:
 *    LoginAdmin:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *          description: username admin
 *        password:
 *          type: string
 *          description: password admin
 *    LoginAdminSuccess:
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
 *            token:
 *              type: string
 *              description: token
 *    LoginAdminFailed:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Bad Request
 *          description: Status
 *        message:
 *          type: string
 *          default: Message Bad Request
 *          description: Message
 * */
const loginAdminService = async (request) => {
  const admin = await validation(loginAdminValidation, request);
  const adminData = await prismaClient.admin.findFirst({
    where: {
      username: admin.username,
    },
  });

  if (!adminData) {
    throw new ResponseError(400, 'Username atau password salah');
  } else if (adminData.username !== admin.username) {
    throw new ResponseError(400, 'Username atau password salah');
  }

  const isPasswordMatch = await bcrypt.compare(admin.password, adminData.password);

  if (!isPasswordMatch) {
    throw new ResponseError(400, 'Username atau password salah');
  } else if (isPasswordMatch) {
    const payload = {
      id_admin: adminData.id_admin,
      username: adminData.username,
    };

    const secretKey = process.env.SECRET_KEY;
    const tokenExpiresIn = 60 * 60 * 24;
    return jwt.sign(payload, secretKey, { expiresIn: tokenExpiresIn });
  }
};

/**
 * @openapi
 * components:
 *  schemas:
 *    GetAdminSuccess:
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
 *            id_admin:
 *              type: string
 *              description: id admin
 *            username:
 *              type: string
 *              description: username admin
 *            foto_admin:
 *              type: string
 *              description: foto admin
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *    UnauthorizedGetAdmin:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: Message Unauthorized
 *
 * */
const getAdminService = async (username) => {
  username = validation(getAdminValidation, username);
  const admin = await prismaClient.admin.findFirst({
    where: {
      username: username,
    },
    select: {
      id_admin: true,
      username: true,
      foto_admin: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!admin) {
    throw new ResponseError(404, 'Admin tidak ditemukan');
  }

  return admin;
};

const updateAdminService = async (request) => {
  const admin = await validation(updateAdminValidation, request);
  const adminData = await prismaClient.admin.findUnique({
    where: {
      id_admin: admin.id_admin,
    },
  });

  if (!adminData) {
    throw new ResponseError(404, 'Admin tidak ditemukan');
  }

  const data = {};
  if (admin.username) {
    data.username = admin.username;
  }

  if (admin.password) {
    data.password = await bcrypt.hash(admin.password, 10);
  }

  if (admin.foto_admin) {
    data.foto_admin = await uploadFile.single('foto_admin')(admin.foto_admin)
      .then(() => {
        return request.file.path;
      })
      .catch((err) => {
        throw new ResponseError(400, err.message);
      });
  }

  return prismaClient.admin.update({
    where: {
      id_admin: admin.id_admin,
    },
    data: data,
    select: {
      id_admin: true,
      username: true,
      foto_admin: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

/**
 * @openapi
 * components:
 *  schemas:
 *    LogoutAdminSuccess:
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
 *    UnauthorizedLogoutAdmin:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Unauthorized
 *          description: Unauthorized
 *        message:
 *          type: string
 *          default: Message Unauthorized
 *          description: Message Unauthorized
 * */
const logoutAdminService = async (username) => {
  username = validation(logoutAdminValidation, username);
  const admin = await prismaClient.admin.findFirst({
    where: {
      username: username,
    },
  });

  if (!admin) {
    throw new ResponseError(404, 'Admin tidak ditemukan');
  }
};

export default {
  registerAdminService,
  loginAdminService,
  getAdminService,
  logoutAdminService,
  updateAdminService,
};