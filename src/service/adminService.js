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


const registerAdminService = async (request) => {
  const admin = await validation(registerAdminValidation, request);
  const isUsernameExist = await prismaClient.admin.count({
    where: {
      username: admin.username,
    },
  });

  if (isUsernameExist === 1) {
    throw new ResponseError(409, 'Username sudah terdaftar');
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


const loginAdminService = async (request) => {
  const admin = await validation(loginAdminValidation, request);
  const adminData = await prismaClient.admin.findFirst({
    where: {
      username: admin.username,
    },
  });

  if (!adminData) {
    throw new ResponseError(401, 'Username atau password salah');
  }

  const isPasswordMatch = await bcrypt.compare(admin.password, adminData.password);

  if (!isPasswordMatch) {
    throw new ResponseError(401, 'Username atau password salah');
  } else if (isPasswordMatch) {
    const payload = {
      id_admin: adminData.id_admin,
      username: adminData.username,
    };

    const secretKey = process.env.SECRET_KEY;
    const tokenExpiresIn = 60 * 60 * 24;
    const token = jwt.sign(payload, secretKey, { expiresIn: tokenExpiresIn });

    return {
      username: adminData.username,
      token: token,
    };
  }
};

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
  const adminExist = await prismaClient.admin.count({
    where: {
      id_admin: admin.id_admin,
    },
  });

  const usernameAdminExist = await prismaClient.admin.count({
    where: {
      username: admin.username,
    },
  });

  if (adminExist !== 1) {
    throw new ResponseError(404, 'Admin tidak ditemukan');
  }


  if (usernameAdminExist === 1) {
    throw new ResponseError(409, 'Username sudah terdaftar');
  }

  return prismaClient.admin.update({
    where: {
      id_admin: admin.id_admin,
    },
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