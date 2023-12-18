import Joi from 'joi';

const getDendaValidation = Joi.string().max(100).required();

const createDendaValidation = Joi.object({
  nominal: Joi.number().required(),
});

export {
  getDendaValidation,
  createDendaValidation,
};