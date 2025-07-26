const Joi = require("joi"); // ----Joi Library

const validationUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    customer_id: Joi.number().required(),
  });

  return schema.validate(user);
}; // ----validationUser

module.exports = { validationUser }; // ----Exports Validations
