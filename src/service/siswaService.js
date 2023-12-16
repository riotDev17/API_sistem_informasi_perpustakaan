import { validation } from '../validation/validation.js';
import { randomNumber } from '../helpers/randomNumber.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createSiswaValidation, getSiswaValidation } from '../validation/siswaValidation.js';

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

const searchSiswaService = async (request) => {
  const { nama_siswa, no_anggota } = request;
  const siswa = await prismaClient.siswa.findMany({
    where: {
      OR: [
        {
          nama_siswa: {
            contains: nama_siswa,
            mode: 'insensitive',
          },
        },
        {
          no_anggota: {
            contains: no_anggota,
            mode: 'insensitive',
          },
        },
      ],
    },
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

  if (siswa.length === 0) {
    throw new ResponseError(404, 'Siswa tidak ditemukan');
  }

  return siswa;
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

const getSiswaByIdService = async (siswaId) => {
  siswaId = await validation(getSiswaValidation, siswaId);
  const siswa = await prismaClient.siswa.findUnique({
    where: {
      id_siswa: siswaId,
    },
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

  if (!siswa) {
    throw new ResponseError(404, 'Siswa tidak ditemukan');
  }

  return siswa;
};

export default {
  getSiswaService,
  createSiswaService,
  searchSiswaService,
  getSiswaByIdService,
};