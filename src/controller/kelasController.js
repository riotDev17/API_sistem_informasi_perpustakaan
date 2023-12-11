import kelasService from '../service/kelasService.js';

const getKelasController = async (req, res, next) => {
  try {
    const result = await kelasService.getKelasService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Kelas',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const searchKelasController = async (req, res, next) => {
  try {
    const request = req.query;
    const result = await kelasService.searchKelasService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mencari Data Kelas',
      data: result,
    });
  } catch (error) {
    next(error);
  }

};

const createKelasController = async (req, res, next) => {
  try {
    const request = req.query;
    const result = await kelasService.createKelasService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Data Kelas',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default { getKelasController, searchKelasController, createKelasController };