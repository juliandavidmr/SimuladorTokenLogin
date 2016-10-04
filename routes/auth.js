var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({
    responsive_type: '',
    client_id: parseInt(Math.random() * 10000000000),
    redirect_uri: 'url',
    state: 'OK'
  });
});

module.exports = router;