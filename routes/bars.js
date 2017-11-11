console.log('BARS routes')

var express = require('express');
var router = express.Router();
var barsController = require('./../controllers/barsController')

/* GET home page. */
router.get('/', barsController.index)

module.exports = router;
