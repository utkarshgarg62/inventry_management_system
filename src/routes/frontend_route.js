const express = require('express');
const router = express.Router();
const moment = require('moment');
const host = 'http://localhost:3000';

/** API Calls */

async function current_Date_Time() {
  return moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
}

/** Frontend Routes */

router.get('/', function (req, res) {
  res.render('homepage', {
    title: 'Homepage',
  });
});
router.get('/login', function (req, res) {
  res.render('login', {
    title: 'Login',
  });
});
router.get('/add-product', function (req, res) {
  res.render('add_product', {
    title: 'Add Product',
  });
});


module.exports = router;
