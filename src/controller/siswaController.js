import uploadFile from '../utils/multer.js';
import siswaService from '../service/siswaService.js';

const getSiswaController = async (req, res, next) => {
  try {
    const result = await siswaService.getSiswaService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Siswa',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const searchSiswaController = async (req, res, next) => {
  try {
    const request = req.query;
    const result = await siswaService.searchSiswaService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mencari Data Siswa',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createSiswaController = async (req, res, next) => {
  try {
    uploadFile.single('foto_siswa')(req, res, async (error) => {
      if (error) {
        next(error);
      }

      const request = req.body;
      request.foto_siswa = req.file.path;

      try {
        const result = await siswaService.createSiswaService(request);
        res.status(200).json({
          status: 'Success',
          message: 'Berhasil Menambahkan Data Siswa',
          data: result,
        });
      } catch (error) {
        next(error);
      }
    });
  } catch (error) {
    next(error);
  }
};


export default {
  getSiswaController,
  searchSiswaController,
  createSiswaController,
};