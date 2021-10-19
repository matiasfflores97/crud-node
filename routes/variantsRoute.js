const { router, cors, corsOptionsDelegate } = require('../app');
const variantController = require('../controllers/variantController');

// CRUD -> Create
router.post('/:id/variants', cors(corsOptionsDelegate), variantController.createVariant)

// CRUD -> Read
router.get('/:id/variants', cors(corsOptionsDelegate), variantController.getVariant)

// CRUD -> Update
router.put('/:id/variants/:v_id', cors(corsOptionsDelegate), variantController.updateVariant)

// CRUD -> Delete
router.delete('/:id/variants/:v_id', cors(corsOptionsDelegate), variantController.deleteVariant)

module.exports = router;
