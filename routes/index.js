var express = require('express');
var router = express.Router();

var homeCtrl = require('../controllers/home');

/* GET home page. */
router.get('/', homeCtrl.home);

module.exports = router;
