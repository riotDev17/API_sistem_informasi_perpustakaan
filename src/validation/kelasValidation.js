import Joi from 'joi';

const createKelasValidation = Joi.object({
  nama_kelas: Joi.string().max(50).required(),
});


export {
  createKelasValidation,
};