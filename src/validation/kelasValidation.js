import Joi from 'joi';

const getKelasValidation = Joi.string().max(100).required();

const createKelasValidation = Joi.object({
  nama_kelas: Joi.string().max(50).required(),
});

export {
  getKelasValidation,
  createKelasValidation,
};