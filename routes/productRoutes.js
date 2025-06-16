const express = require("express");
const {
  addProduct,
  getProducts,
  updateProductQuantity,
} = require("../controllers/productController");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authenticate, addProduct);
router.get("/", authenticate, getProducts);
router.put("/:id/quantity", authenticate, updateProductQuantity);

module.exports = router;
