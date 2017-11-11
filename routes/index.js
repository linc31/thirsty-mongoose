console.log('INDEX routes')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('getting index page')
  res.render('index', { title: 'THIRSTAAY', classOf: 'WDI_DTLA_59'});
});

module.exports = router;
