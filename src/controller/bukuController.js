import bukuService from '../service/bukuService.js';
import uploadFile from '../utils/multer.js';

const createBukuController = async (req, res, next) => {
  try {
    uploadFile.single('foto_buku')(req, res, async (error) => {
      if (error) {
        next(error);
      }

      const buku = req.body;
      buku.foto_buku = req.file.path;
      
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


export default {
  createBukuController,
};