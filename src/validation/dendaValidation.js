import Joi from 'joi';

const getDendaValidation = Joi.string().max(100).required();

const createDendaValidation = Joi.object({
  nominal: Joi.number().required(),
});

const updateDendaValidation = Joi.object({
  id_denda: Joi.string().max(100).required(),
  nominal: Joi.number().required(),
});

export {
  getDendaValidation,
  createDendaValidation,
  updateDendaValidation,
};