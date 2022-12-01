const ProductService = require('../services/product-service');

const getProducts = async (req, res) => {
  const products = await ProductService.getProducts();
  res.json(products);
};

const saveProduct = async (req, res) => {
  const product = req.body;
  console.log('Product', product);
  const savedProduct = await ProductService.saveProduct(product);
  res.status(201).json(savedProduct);
};

module.exports = {
  // getProducts: getProducts
  getProducts,
  saveProduct,
};
