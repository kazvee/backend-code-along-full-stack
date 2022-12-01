const express = require('express');

const productsController = require('../controller/products-controller');

const router = express.Router();

// GET /products/
router.get('/', productsController.getProducts);

router.post('/', productsController.saveProduct);

module.exports = router;
