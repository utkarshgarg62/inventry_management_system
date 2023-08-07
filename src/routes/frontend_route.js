const express = require('express');
const router = express.Router();
const moment = require('moment');
const host = 'http://localhost:3000';

/** API Calls */

async function current_Date_Time() {
  return moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
}

/** Frontend Routes */

router.get('/emp/login', function (req, res) {
  res.render('Login', {
    title: 'Login',
  });
});


module.exports = router;
