import riwayatService from '../service/riwayatService.js';

const getRiwayatController = async (req, res, next) => {
  try {
    const riwayat = await riwayatService.getRiwayatService();
    res.status(200).json({
      status: 'success',
      message: 'Berhasil Mendapatkan Data Riwayat',
      data: riwayat,
    });
  } catch (error) {
    next(error);
  }
};

const searchRiwayatController = async (req, res, next) => {
  try {
    const request = req.query;
    const result = await riwayatService.searchRiwayatService(request);
    res.status(200).json({
      status: 'success',
      message: 'Berhasil Mendapatkan Data Riwayat',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteRiwayatController = async (req, res, next) => {
  try {
    await riwayatService.deleteRiwayatService();
    res.status(200).json({
      status: 'success',
      message: 'Berhasil Menghapus Semua Data Riwayat Pengembalian Buku',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getRiwayatController,
  searchRiwayatController,
  deleteRiwayatController,
};
