const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  items: [],
  client: {
    name: String,
    email: String,
    phone: Number,
  },
  shipping: {
    address: String,
    city: String,
    state: String,
    zip: String,
  },
  payment: {
    cardNumber: Number,
    cardName: String,
    expDate: String,
    cvc: Number,
  },
});

const OrderModel = mongoose.model("orders", OrderSchema);

module.exports = OrderModel;
