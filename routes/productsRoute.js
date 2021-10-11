const { router, cors, corsOptionsDelegate } = require('../app');
const productController = require('../controllers/productController');

// CRUD -> Create
router.post('/', cors(corsOptionsDelegate), productController.createProduct)

// CRUD -> Read
router.get('/', cors(corsOptionsDelegate), productController.getProduct)

// CRUD -> Read ID
router.get('/:id', cors(corsOptionsDelegate), productController.getProductById)

// CRUD -> Update
router.put('/:id', cors(corsOptionsDelegate), productController.updateProduct)

// CRUD -> Delete
router.delete('/:id', cors(corsOptionsDelegate), productController.deleteProduct)

module.exports = router;