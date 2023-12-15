import rakBukuService from '../service/rakBukuService.js';

const getRakBukuController = async (req, res, next) => {
  try {
    const result = await rakBukuService.getRakBukuService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil mendapatkan data Rak Buku',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createRakBukuController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await rakBukuService.createRakBukuService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Data Rak Buku',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


export default {
  getRakBukuController,
  createRakBukuController,
};