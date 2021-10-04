const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/productController');

// CRUD -> Create
router.post('/', product_controller.createProduct)

// CRUD -> Read
router.get('/', product_controller.getProduct)

// CRUD -> Update
router.put('/:id', product_controller.updateProduct)

// CRUD -> Delete
router.delete('/:id', product_controller.deleteProduct)

module.exports = router;