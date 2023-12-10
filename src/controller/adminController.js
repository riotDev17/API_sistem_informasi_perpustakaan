import adminService from '../service/adminService.js';

const registerAdminController = async (req, res, next) => {
  try {
    const result = await adminService.registerAdminService(req.body);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Register',
      data: result,
    });
  } catch (e) {
    next(e);
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
  } catch (e) {
    next(e);
  }
};

export default {
  registerAdminController,
  loginAdminController,
};