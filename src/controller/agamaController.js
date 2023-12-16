import agamaService from '../service/agamaService.js';

const getAgamaController = async (req, res, next) => {
  try {
    const result = await agamaService.getAgamaService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Agama',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const searchAgamaController = async (req, res, next) => {
  try {
    const request = req.query;
    const result = await agamaService.searchAgamaService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Agama',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createAgamaController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await agamaService.createAgamaService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Data Agama',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAgamaByIdController = async (req, res, next) => {
  try {
    const { agamaId } = req.params;
    const result = await agamaService.getAgamaByIdService(agamaId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Agama',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateAgamaController = async (req, res, next) => {
  try {
    const { agamaId } = req.params;
    const request = req.body;
    request.id_agama = agamaId;
    const result = await agamaService.updateAgamaService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Update Data Agama',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAgamaController = async (req, res, next) => {
  try {
    const { agamaId } = req.params;
    await agamaService.deleteAgamaService(agamaId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menghapus Data Agama',
    });
  } catch (error) {
    next(error);
  }

};

export default {
  getAgamaController,
  searchAgamaController,
  getAgamaByIdController,
  createAgamaController,
  updateAgamaController,
  deleteAgamaController,
};