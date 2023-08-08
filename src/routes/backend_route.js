const express = require('express');
const router = express.Router();

const {
  abc
} = require('../controllers/abc');

// router.get('', abc);


router.get('*', async function (req, res) {
  res.render('404-Error', {
    title: '404',
  });
});

module.exports = router;
