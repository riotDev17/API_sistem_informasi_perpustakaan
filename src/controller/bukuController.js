import uploadFile from '../utils/multer.js';
import bukuService from '../service/bukuService.js';
import multer from 'multer';

const getBukuController = async (req, res, next) => {
  try {
    const result = await bukuService.getBukuService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Buku',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const searchBukuController = async (req, res, next) => {
  try {
    const request = req.query;
    const result = await bukuService.searchBukuService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Buku',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createBukuController = async (req, res, next) => {
  try {
    uploadFile.single('foto_buku')(req, res, async (error) => {
      if (error instanceof multer.MulterError) {
        res.status(400).json({
          status: 'Error',
          message: error.message,
        });
      } else if (error) {
        next(error);
      }

      const buku = req.body;

      if (req.file) {
        buku.foto_buku = req.file.path;
      }

      try {
        const result = await bukuService.createBukuService(buku);
        res.status(200).json({
          status: 'Success',
          message: 'Berhasil Menambahkan Data Buku',
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

const getBukuByIdController = async (req, res, next) => {
  try {
    const { bukuId } = req.params;
    const result = await bukuService.getBukuByIdService(bukuId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Buku',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateBukuController = async (req, res, next) => {
  try {
    uploadFile.single('foto_buku')(req, res, async (error) => {
      if (error) {
        next(error);
      }

      const { bukuId } = req.params;
      const request = req.body;
      request.id_buku = bukuId;
      request.foto_buku = req.file.path;

      try {
        const result = await bukuService.updateBukuService(request);
        res.status(200).json({
          status: 'Success',
          message: 'Berhasil Mengupdate Data Buku',
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

const deleteBukuController = async (req, res, next) => {
  try {
    const { bukuId } = req.params;
    await bukuService.deleteBukuService(bukuId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menghapus Data Buku',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getBukuController,
  createBukuController,
  searchBukuController,
  getBukuByIdController,
  updateBukuController,
  deleteBukuController,
};