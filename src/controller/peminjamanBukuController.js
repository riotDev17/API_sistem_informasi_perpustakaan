import peminjamanBukuService from '../service/peminjamanBukuService.js';

const getPeminjamanBukuController = async (req, res, next) => {
  try {
    const result = await peminjamanBukuService.getPeminjamanBukuService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menampilkan Data Peminjaman Buku',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createPeminjamanBukuController = async (req, res, next) => {
  try {
    const { siswaId } = req.params;
    const request = req.body;
    request.id_siswa = siswaId;
    const result =
      await peminjamanBukuService.createPeminjamanBukuService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Data Peminjaman Buku',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const searchPeminjamanBukuController = async (req, res, next) => {
  try {
    const request = req.query;
    const result =
      await peminjamanBukuService.searchPeminjamanBukuService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mencari Data Peminjaman Buku',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updatePeminjamanBukuController = async (req, res, next) => {
  try {
    await peminjamanBukuService.updatePeminjamanBukuService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mengupdate Semua Data Peminjaman Buku',
    });
  } catch (error) {
    next(error);
  }
};

const deletePeminjamanBukuController = async (req, res, next) => {
  try {
    const { peminjamanBukuId } = req.params;
    await peminjamanBukuService.deletePeminjamanBukuService(peminjamanBukuId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Melakukan Pengembalian Buku',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getPeminjamanBukuController,
  createPeminjamanBukuController,
  searchPeminjamanBukuController,
  updatePeminjamanBukuController,
  deletePeminjamanBukuController,
};
