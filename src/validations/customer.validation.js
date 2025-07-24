const Joi = require("joi"); // ----Joi Library

const validationCustomer = (customer) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    address: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
  });

  return schema.validate(customer);
}; // ----validationCustomer

module.exports = { validationCustomer }; // ----Exports Validations
