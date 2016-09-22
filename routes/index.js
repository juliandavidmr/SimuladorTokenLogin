var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/login/:url', function (req, res) {
  console.log('=>', req.params);
  res.redirect('http://' + req.params.url);
});

module.exports = router;
