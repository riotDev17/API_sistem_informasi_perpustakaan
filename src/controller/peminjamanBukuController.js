import peminjamanBukuService from '../service/peminjamanBukuService.js';

const createPeminjamanBukuController = async (req, res, next) => {
  try {
    const {siswaId} = req.params;
    const request = req.body;
    request.id_siswa = siswaId;
    const result = await peminjamanBukuService.createPeminjamanBukuService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Data Peminjaman Buku',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


export default {
  createPeminjamanBukuController,
};