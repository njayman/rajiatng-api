const router = require('express').Router();
const { get_product, get_products } = require('../controllers/userproduct');

router.get('/products', get_products);
router.get('/product/:id', get_product);

module.exports = router;