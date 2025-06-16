const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const { name, type, sku, image_url, description, quantity, price } = req.body;

    if (!name || !sku || quantity == null || price == null) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newProduct = new Product({ name, type, sku, image_url, description, quantity, price });
    const saved = await newProduct.save();

    res.status(201).json({ product_id: saved._id });
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

exports.updateProductQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  if (quantity == null) {
    return res.status(400).json({ error: "Quantity is required" });
  }

  try {
    const updated = await Product.findByIdAndUpdate(id, { quantity }, { new: true });

    if (!updated) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ quantity: updated.quantity });
  } catch (err) {
    res.status(500).json({ error: "Failed to update product quantity" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    // ✅ Optional: Basic pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const products = await Product.find().skip(skip).limit(limit);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
