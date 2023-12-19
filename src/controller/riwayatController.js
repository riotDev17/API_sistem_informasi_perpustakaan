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

export default {
  getRiwayatController,
};