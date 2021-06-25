const Joi = require("@hapi/joi");

const sellerValidation = (data) => {
  const schema = Joi.object({
    Name: Joi.string().min(6).required(),
    Email: Joi.string().min(6).required(),
    Password: Joi.string().min(6).required(),
    Area: Joi.string().min(6).required(),
    Restaurant_Name: Joi.string().min(6).required(),
    Address: Joi.string().min(6).required(),
    Cruisine: Joi.string().min(6).required(),
    Minimum_Order: Joi.number().integer(),
    Telephone: Joi.string().min(6).required(),
    thumbnail: Joi.any(),
    thumbnail1: Joi.any(),
    thumbnail2: Joi.any(),
    id: Joi.any(),
    orders: Joi.any(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const additemsValidation = (data) => {
  const schema = Joi.object({
    Name: Joi.string().min(6).required(),
    Price: Joi.number().integer().required(),
    Description: Joi.string().min(20).required(),
    Pic: Joi.any(),
  });
  return schema.validate(data);
};

module.exports.additemsValidation = additemsValidation;
module.exports.sellerValidation = sellerValidation;
module.exports.loginValidation = loginValidation;
