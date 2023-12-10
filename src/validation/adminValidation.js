import Joi from 'joi';

const registerAdminValidation = Joi.object({
  username: Joi.string().max(50).required(),
  password: Joi.string().min(8).max(100).required(),
});

export {
  registerAdminValidation,
};