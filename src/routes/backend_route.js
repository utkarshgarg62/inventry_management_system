const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")

router.post('/products', productController.createProduct);
router.get('/products', productController.getProduct);
router.put('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);

router.get('*', async function (req, res) {
  res.render('404-Error', {
    title: '404',
  });
});

module.exports = router;
