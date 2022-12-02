const ProductService = require('../services/product-service');
const Order = require('../models/order');

const saveOrder = async (order) => {
  await module.exports.addTotalToOrder(order);

  const newOrder = new Order(order);
  await newOrder.save();

  return newOrder.toObject();
};

const addTotalToOrder = async (order) => {
  let total = 0;

  for await (const productId of order.products) {
    const product = await ProductService.getProductById(productId);
    total += product.price;
  }

  order.total = total;
};

module.exports = {
  saveOrder,
  addTotalToOrder,
};
