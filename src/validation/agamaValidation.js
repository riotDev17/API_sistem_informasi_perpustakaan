import Joi from 'joi';

const getAgamaValidation = Joi.string().max(100).required();

const createAgamaValidation = Joi.object({
  nama_agama: Joi.string().max(25).required(),
});

const updateAgamaValidation = Joi.object({
  id_agama: Joi.string().max(100).required(),
  nama_agama: Joi.string().max(25).required(),
});

const deleteAgamaValidation = Joi.string().max(100).required();

export {
  getAgamaValidation,
  createAgamaValidation,
  updateAgamaValidation,
  deleteAgamaValidation,
};