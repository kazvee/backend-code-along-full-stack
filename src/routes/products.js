const express = require('express');

const productsController = require('../controller/products-controller');

const router = express.Router();

// GET /products/
router.get('/', productsController.getProducts);

router.post('/', productsController.saveProduct);

router.put('/:id', productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;
