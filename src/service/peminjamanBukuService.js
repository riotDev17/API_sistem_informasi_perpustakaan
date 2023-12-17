import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createPeminjamanBukuValidation } from '../validation/peminjamanBukuValidation.js';

const createPeminjamanBukuService = async (request) => {
  const peminjamanBuku = await validation(createPeminjamanBukuValidation, request);
  const stokBukuExist = await prismaClient.buku.findUnique({
    where: {
      id_buku: peminjamanBuku.id_buku,
    },
    select: {
      stok_buku: true,
    },
  });

  const peminjamanBukuExist = await prismaClient.peminjaman.count({
    where: {
      id_buku: peminjamanBuku.id_buku,
      id_siswa: peminjamanBuku.id_siswa,
    },
  });

  const tanggalPinjam = new Date();
  const tanggalKembali = new Date(tanggalPinjam);
  tanggalKembali.setDate(tanggalKembali.getDate() + 7);

  const dataPeminjamanBuku = {
    ...peminjamanBuku,
    tanggal_kembali: tanggalKembali,
  };

  if (peminjamanBukuExist === 1) {
    throw new ResponseError(409, 'Siswa Sudah Meminjam Buku Ini');
  }

  if (stokBukuExist.stok_buku === 0) {
    throw new ResponseError(409, 'Stok Buku Habis');
  } else {
    await prismaClient.buku.update({
      where: {
        id_buku: peminjamanBuku.id_buku,
      },
      data: {
        stok_buku: {
          decrement: 1,
        },
      },
    });
  }

  return prismaClient.peminjaman.create({
    data: dataPeminjamanBuku,
    select: {
      id_peminjaman: true,
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
          createdAt: true,
          updatedAt: true,
        },
      },
      tanggal_pinjam: true,
      tanggal_kembali: true,
      createdAt: true,
      updatedAt: true,
    },
  });

};

export default {
  createPeminjamanBukuService,
};