import Joi from 'joi';

const getSiswaValidation = Joi.string().max(100).required();

const createSiswaValidation = Joi.object({
  nama_siswa: Joi.string().max(50).required(),
  nis: Joi.string().max(20).required(),
  nisn: Joi.string().max(20).required(),
  tanggal_lahir: Joi.string().max(50).required(),
  tempat_lahir: Joi.string().required(),
  jenis_kelamin: Joi.string().max(15).required(),
  id_agama: Joi.string().required(),
  alamat: Joi.string().required(),
  id_kelas: Joi.string().required(),
  foto_siswa: Joi.string().optional(),
});


export {
  getSiswaValidation,
  createSiswaValidation,
};