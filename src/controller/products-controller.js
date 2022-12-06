const ProductService = require('../services/product-service');

const getProducts = async (req, res) => {
  const products = await ProductService.getProducts();

  res.json(products);
};

const saveProduct = async (req, res) => {
  const product = req.body;

  const savedProduct = await ProductService.saveProduct(product);

  res.status(201).json(savedProduct);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const newProductInfo = req.body;

  const updatedProduct = await ProductService.updateProduct(id, newProductInfo);

  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  await ProductService.deleteProduct(id);

  res.status(204).send();
};

module.exports = {
  // getProducts: getProducts
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
};
