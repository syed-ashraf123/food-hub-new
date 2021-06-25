const mongoose = require("mongoose");

const SellerDetails = mongoose.Schema({
  ownerName: String,
  email: String,
  password: String,
  area: String,
  restaurantName: String,
  address: String,
  cruisine: String,
  minimumOrder: String,
  tel: String,
  thumbnail: [],
  id: String,
  items: [],
  orders: [],
});

module.exports = mongoose.model("SellerDetails", SellerDetails);
