var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', (req, res) => {
  res.json({
    msg: 'Bienvenido al simulador de token login.'
  })
});

module.exports = router;
