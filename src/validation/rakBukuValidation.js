import Joi from 'joi';

const getRakBukuValidation = Joi.string().max(100).required();

const createRakBukuValidation = Joi.object({
  nama_rak_buku: Joi.string().max(50).required(),
});

const updateRakBukuValidation = Joi.object({
  id_rak_buku: Joi.string().max(100).required(),
  nama_rak_buku: Joi.string().max(50).required(),
});


export {
  getRakBukuValidation,
  createRakBukuValidation,
  updateRakBukuValidation,
};