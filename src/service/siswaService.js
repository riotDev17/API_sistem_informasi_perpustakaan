import { validation } from '../validation/validation.js';
import { randomNumber } from '../helpers/randomNumber.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createSiswaValidation } from '../validation/siswaValidation.js';

const getSiswaService = async () => {
  return prismaClient.siswa.findMany({
    select: {
      id_siswa: true,
      no_anggota: true,
      nama_siswa: true,
      nis: true,
      nisn: true,
      tanggal_lahir: true,
      tempat_lahir: true,
      jenis_kelamin: true,
      agama: {
        select: {
          id_agama: true,
          nama_agama: true,
        },
      },
      kelas: {
        select: {
          id_kelas: true,
          nama_kelas: true,
        },
      },
      alamat: true,
      foto_siswa: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

const createSiswaService = async (request) => {
  const siswa = await validation(createSiswaValidation, request);
  const siswaExist = await prismaClient.siswa.count({
    where: {
      nama_siswa: siswa.nama_siswa,
    },
  });

  if (siswaExist === 1) {
    throw new ResponseError(409, 'Siswa sudah ada');
  }

  siswa.no_anggota = randomNumber();

  return prismaClient.siswa.create({
    data: siswa,
    select: {
      id_siswa: true,
      no_anggota: true,
      nama_siswa: true,
      nis: true,
      nisn: true,
      tanggal_lahir: true,
      tempat_lahir: true,
      jenis_kelamin: true,
      agama: {
        select: {
          id_agama: true,
          nama_agama: true,
        },
      },
      kelas: {
        select: {
          id_kelas: true,
          nama_kelas: true,
        },
      },
      alamat: true,
      foto_siswa: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export default {
  getSiswaService,
  createSiswaService,
};