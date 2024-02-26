const mongoose = require("mongoose");

const productCard = new mongoose.Schema({
  name: String,
  minOrder: Number,
  dimensions: Object,
  images: Array,
  mainType: mongoose.Types.ObjectId
});

const ProductsCardModel = mongoose.model("Product", productCard);

module.exports = ProductsCardModel;
