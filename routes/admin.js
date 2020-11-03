const router = require('express').Router()
const { get_products, add_product, get_product, delete_product } = require('../controllers/adminproducts')

router.get('/products', get_products)
router.post('/products/add', add_product)
router.get('/product/:id', get_product)
router.delete('/product/delete/:id', delete_product)

module.exports = router;