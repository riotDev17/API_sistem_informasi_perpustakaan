import adminService from '../service/adminService.js';

const registerAdmin = async (req, res, next) => {
  try {
    const result = await adminService.registerAdmin(req.body);
    res.status(200).json({
      status: 'success',
      message: 'Berhasil Register',
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  registerAdmin,
};