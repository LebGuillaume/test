var express = require('express');
var router = express.Router();

/* GET contact listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
