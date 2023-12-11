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

const getKelasByIdController = async (req, res, next) => {
  try {
    const { kelasId } = req.params;
    const result = await kelasService.getKelasByIdService(kelasId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Kelas',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateKelasController = async (req, res, next) => {
  try {
    const { kelasId } = req.params;
    const request = req.body;
    request.id_kelas = kelasId;
    const result = await kelasService.updateKelasService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mengubah Data Kelas',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteKelasController = async (req, res, next) => {
  try {
    const { kelasId } = req.params;
    await kelasService.deleteKelasService(kelasId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menghapus Data Kelas',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getKelasController,
  searchKelasController,
  createKelasController,
  getKelasByIdController,
  updateKelasController,
  deleteKelasController,
};