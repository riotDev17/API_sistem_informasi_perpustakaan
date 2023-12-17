import Joi from 'joi';

const getBukuValidation = Joi.string().required();

const createBukuValidation = Joi.object({
  judul_buku: Joi.string().max(50).required(),
  pengarang: Joi.string().max(50).required(),
  penerbit: Joi.string().max(50).required(),
  tahun_terbit: Joi.string().max(10).required(),
  deskripsi: Joi.string().required(),
  stok_buku: Joi.number().required(),
  foto_buku: Joi.string().optional(),
  id_rak_buku: Joi.string().max(100).required(),
});

const updateBukuValidation = Joi.object({
  id_buku: Joi.string().max(100).required(),
  judul_buku: Joi.string().max(50).required(),
  pengarang: Joi.string().max(50).required(),
  penerbit: Joi.string().max(50).required(),
  tahun_terbit: Joi.string().max(10).required(),
  deskripsi: Joi.string().required(),
  stok_buku: Joi.number().required(),
  foto_buku: Joi.string().optional(),
  id_rak_buku: Joi.string().max(100).required(),
});


export {
  getBukuValidation,
  createBukuValidation,
  updateBukuValidation,
};