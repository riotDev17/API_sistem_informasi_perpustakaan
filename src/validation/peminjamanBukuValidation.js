import Joi from 'joi';

const getPeminjamanBukuValidation = Joi.string().max(100).required();

const createPeminjamanBukuValidation = Joi.object({
  id_buku: Joi.string().max(100).required(),
  id_siswa: Joi.string().max(100).required(),
  id_denda: Joi.string().max(100).optional(),
});

const updatePeminjamanBukuValidation = Joi.object({
  tanggal_pinjam: Joi.date().required(),
});

export {
  getPeminjamanBukuValidation,
  createPeminjamanBukuValidation,
  updatePeminjamanBukuValidation,
};
