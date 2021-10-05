const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

// CRUD -> Create
router.post('/', productController.createProduct)

// CRUD -> Read
router.get('/', productController.getProduct)

// CRUD -> Update
router.put('/:id', productController.updateProduct)

// CRUD -> Delete
router.delete('/:id', productController.deleteProduct)

module.exports = router;