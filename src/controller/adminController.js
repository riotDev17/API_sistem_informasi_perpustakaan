import uploadFile from '../utils/multer.js';
import adminService from '../service/adminService.js';
import multer from 'multer';
import { ResponseError } from '../error/responseError.js';

const registerAdminController = async (req, res, next) => {
  try {
    const result = await adminService.registerAdminService(req.body);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Register',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const loginAdminController = async (req, res, next) => {
  try {
    const result = await adminService.loginAdminService(req.body);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Login',
      data: {
        token: result,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getAdminController = async (req, res, next) => {
  try {
    const username = req.admin.username;
    const result = await adminService.getAdminService(username);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Admin',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateAdminController = async (req, res, next) => {
  try {
    uploadFile.single('foto_admin')(req, res, async (error) => {
      if (error instanceof multer.MulterError) {
        res.status(400).json({
          status: 'Error',
          message: error.message,
        });
      } else if (error) {
        next(error);
      }

      const { adminId } = req.params;
      const request = req.body;
      request.id_admin = adminId;

      if (req.file) {
        request.foto_admin = req.file.path;
      }

      try {
        const result = await adminService.updateAdminService(request);
        res.status(200).json({
          status: 'Success',
          message: 'Berhasil Mengupdate Data Admin',
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

const logoutAdminController = async (req, res, next) => {
  try {
    const username = req.admin.username;
    await adminService.logoutAdminService(username);
    res.status(200).json({
      status: 'success',
      message: 'Berhasil logout',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  registerAdminController,
  loginAdminController,
  getAdminController,
  logoutAdminController,
  updateAdminController,
};