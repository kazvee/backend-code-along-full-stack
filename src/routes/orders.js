const express = require('express');

const ordersController = require('../controller/orders-controller');

const router = express.Router();

router.post('/', ordersController.saveOrder);

module.exports = router;
