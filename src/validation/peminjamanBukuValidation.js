import Joi from 'joi';

const createPeminjamanBukuValidation = Joi.object({
  id_buku: Joi.string().max(100).required(),
  id_siswa: Joi.string().max(100).required(),
  id_denda: Joi.string().max(100).optional(),
});


export {
  createPeminjamanBukuValidation,
};