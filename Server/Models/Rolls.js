const mongoose = require("mongoose");

const RoolSchema = new mongoose.Schema({
  Type: {
    type: String,
    required: true,
    trim: true,
  },
  Rate: {
    type: Number,
    required: true,
  },
  Sizes: {
    type: Object
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  Quantity:{
    type: Number
  },
  images:{
    type: Array
  },
});

module.exports = mongoose.model("Roll", RoolSchema);
