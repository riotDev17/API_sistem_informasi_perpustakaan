import Joi from 'joi';

const createDendaValidation = Joi.object({
  nominal: Joi.number().required(),
});

export {
  createDendaValidation,
};