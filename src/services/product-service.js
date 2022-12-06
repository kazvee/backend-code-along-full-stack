const Product = require('../models/product');

const getProducts = async () => {
  const products = await Product.find().lean().exec();
  return products;
};

const saveProduct = async (product) => {
  const savedProduct = new Product(product);

  await savedProduct.save();

  return savedProduct;
};

const updateProduct = async (id, newProductInfo) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, newProductInfo, {
    returnDocument: 'after',
  })
    .lean()
    .exec();

  return updatedProduct;
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id).exec();
};

const getProductById = async (id) => {
  const product = Product.findById(id).lean().exec();

  return product;
};

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
