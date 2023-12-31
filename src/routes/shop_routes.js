// rutas de la tienda
const express = require('express');
const router = express.Router();
const controller = require('../controllers/shop_controller');

router.get('/', controller.shop);
router.get('/item/:id', controller.item);
router.post('/item/:id/update', controller.updateCart);
router.get('/carrito', controller.carrito);
router.get('/item/:id/delete', controller.deleteItem)

module.exports = router;