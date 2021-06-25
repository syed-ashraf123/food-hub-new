const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  name: String,
  area: String,
  address: String,
  thumbnail: String,
  dishes: [{}],
  img: String,
  bgimg: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
});

module.exports = mongoose.model("Food", FoodSchema);
