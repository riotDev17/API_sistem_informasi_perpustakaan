import Joi from 'joi';

const getKelasValidation = Joi.string().max(100).required();

const createKelasValidation = Joi.object({
  nama_kelas: Joi.string().max(50).required(),
});

const updateKelasValidation = Joi.object({
  id_kelas: Joi.string().max(100).required(),
  nama_kelas: Joi.string().max(50).required(),
});

export {
  getKelasValidation,
  createKelasValidation,
  updateKelasValidation
};