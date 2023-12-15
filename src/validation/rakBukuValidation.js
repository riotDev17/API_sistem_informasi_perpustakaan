import Joi from 'joi';

const createRakBukuValidation = Joi.object({
  nama_rak_buku: Joi.string().max(50).required(),
});

export {
  createRakBukuValidation,
};