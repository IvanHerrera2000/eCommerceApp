const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/productControllers");

//GET all products from db
router.get("/", getProducts);

//GET a product by id from db
router.get("/:id", getProductById);

module.exports = router;
