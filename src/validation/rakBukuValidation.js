import Joi from 'joi';

const getRakBukuValidation = Joi.string().max(100).required();

const createRakBukuValidation = Joi.object({
  nama_rak_buku: Joi.string().max(50).required(),
});

export {
  getRakBukuValidation,
  createRakBukuValidation,
};