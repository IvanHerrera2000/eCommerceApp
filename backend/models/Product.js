const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    requiered: true,
  },
  description: {
    type: String,
    requiered: true,
  },
  price: {
    type: Number,
    requiered: true,
  },
  countInStock: {
    type: Number,
    requiered: true,
  },
  imageUrl: {
    type: String,
    requiered: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
