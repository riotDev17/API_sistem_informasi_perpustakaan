import rakBukuService from '../service/rakBukuService.js';

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
  createRakBukuController,
};