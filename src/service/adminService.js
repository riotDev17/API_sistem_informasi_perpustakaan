import bcrypt from 'bcrypt';
import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { registerAdminValidation } from '../validation/adminValidation.js';

const registerAdmin = async (request) => {
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

export default {
  registerAdmin,
};