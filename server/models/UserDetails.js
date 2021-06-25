const mongoose = require("mongoose");

const UserDetails = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  orders: [],
});

module.exports = mongoose.model("UserDetails", UserDetails);
