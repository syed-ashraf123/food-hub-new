const Joi = require("@hapi/joi");

const userValidation = (data) => {
  const schema = Joi.object({
    Name: Joi.string().min(6).required(),
    Email: Joi.string().min(6).required(),
    Password: Joi.string().min(6).required(),
    Address: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports.userValidation = userValidation;
