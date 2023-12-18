import dendaService from '../service/dendaService.js';

const getDendaController = async (req, res, next) => {
  try {
    const result = await dendaService.getDendaService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menampilkan Data Denda',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const searchDendaController = async (req, res, next) => {
  try {
    const request = req.query;
    const result = await dendaService.searchDendaService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mencari Data Denda',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

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
  getDendaController,
  searchDendaController,
  createDendaController,
};