const mongoose = require("mongoose");

const Items = mongoose.Schema({
  items: [],
  id: String,
});

module.exports = mongoose.model("Items", Items);
