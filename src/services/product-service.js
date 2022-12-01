const Product = require('../models/product');

const getProducts = async () => {
  //   const products = await Product.find().exec(); // the exec method returns a promise
  const products = await Product.find().lean().exec; // the lean converts the object to a javascript object
  return products;
  //   return [
  //     {
  //       name: 'Cow',
  //       description: 'This is a cow.',
  //       price: '10000',
  //       imageUrl:
  //         'https://images.pexels.com/photos/36347/cow-pasture-animal-almabtrieb.jpg?auto=compress&cs=tinysrgb&w=1600',
  //     },

  //     {
  //       name: 'Cow 2',
  //       description: 'This is another cow.',
  //       price: '10000',
  //       imageUrl:
  //         'https://images.pexels.com/photos/36347/cow-pasture-animal-almabtrieb.jpg?auto=compress&cs=tinysrgb&w=1600',
  //     },
  //   ];
};

const saveProduct = async (product) => {
  //   const products = await Product.find().exec(); // the exec method returns a promise
  const savedProduct = new Product(product);
  await savedProduct.save();
  return savedProduct;
};

module.exports = {
  getProducts,
  saveProduct,
};
