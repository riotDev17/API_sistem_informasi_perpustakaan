import dendaService from '../service/dendaService.js';

const createDendaController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await dendaService.createDendaService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Data Denda',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createDendaController,
};