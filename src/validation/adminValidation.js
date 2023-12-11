import Joi from 'joi';

const registerAdminValidation = Joi.object({
  username: Joi.string().max(50).required(),
  password: Joi.string().min(8).max(100).required(),
});

const loginAdminValidation = Joi.object({
  username: Joi.string().max(50).required(),
  password: Joi.string().min(8).max(100).required(),
});

const getAdminValidation = Joi.string().max(100).required();

const logoutAdminValidation = Joi.string().max(100).required();

const updateAdminValidation = Joi.object({
  id_admin: Joi.string().max(100).required(),
  username: Joi.string().max(50).optional(),
  password: Joi.string().min(8).max(100).optional(),
  foto_admin: Joi.string().optional(),
});

export {
  registerAdminValidation,
  loginAdminValidation,
  getAdminValidation,
  logoutAdminValidation,
  updateAdminValidation,
};