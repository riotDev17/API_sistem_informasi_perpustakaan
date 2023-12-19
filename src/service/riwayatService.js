import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';

const getRiwayatService = async () => {
  return prismaClient.riwayat.findMany({
    select: {
      id_riwayat: true,
      buku: {
        select: {
          id_buku: true,
          judul_buku: true,
          pengarang: true,
          penerbit: true,
          tahun_terbit: true,
          deskripsi: true,
          stok_buku: true,
          foto_buku: true,
          rak_buku: {
            select: {
              id_rak_buku: true,
              nama_rak_buku: true,
            },
          },
          createdAt: true,
          updatedAt: true,
        },
      },
      siswa: {
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
          alamat: true,
          kelas: {
            select: {
              id_kelas: true,
              nama_kelas: true,
            },
          },
          foto_siswa: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      status: true,
      tanggal_pinjam: true,
      tanggal_kembali: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const searchRiwayatService = async (request) => {
  const { tanggal_pinjam, tanggal_kembali } = request;
  let whereCondition = {};

  if (tanggal_pinjam && tanggal_kembali) {
    whereCondition = {
      AND: [
        {
          tanggal_pinjam: {
            gte: tanggal_pinjam,
          },
        },
        {
          tanggal_kembali: {
            lte: tanggal_kembali,
          },
        },
      ],
    };
  } else if (tanggal_pinjam) {
    whereCondition = {
      tanggal_pinjam: {
        gte: tanggal_pinjam,
      },
    };
  } else if (tanggal_kembali) {
    whereCondition = {
      tanggal_kembali: {
        lte: tanggal_kembali,
      },
    };
  }

  const riwayat = await prismaClient.riwayat.findMany({
    where: whereCondition,
    select: {
      id_riwayat: true,
      buku: {
        select: {
          id_buku: true,
          judul_buku: true,
          pengarang: true,
          penerbit: true,
          tahun_terbit: true,
          deskripsi: true,
          stok_buku: true,
          foto_buku: true,
          rak_buku: {
            select: {
              id_rak_buku: true,
              nama_rak_buku: true,
            },
          },
          createdAt: true,
          updatedAt: true,
        },
      },
      siswa: {
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
          alamat: true,
          kelas: {
            select: {
              id_kelas: true,
              nama_kelas: true,
            },
          },
          foto_siswa: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      status: true,
      tanggal_pinjam: true,
      tanggal_kembali: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (riwayat.length === 0) {
    throw new ResponseError(404, 'Riwayat Tidak Ditemukan');
  }

  return riwayat;
};

export default {
  getRiwayatService,
  searchRiwayatService,
};