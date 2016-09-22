var express = require('express');
var router = express.Router();

var users = {
  user: 'jul.mora@udla.edu.co',
  pass: '123',
  key: 'ksj23023s'
};

router.post('/sigin/:email/:pass/:url', (req, res) => {
  console.log('===>', req.body);

  var user = req.params.email;
  var pass = req.params.pass;
  var url = req.params.url;

  console.log('Peticion');

  if (users.pass === pass && users.user === user) {
    console.log('Logeado');

    res.redirect('http://' + url + '/?token=' + users.key);
  } else {
    res.json({
      state: 'ERROR 100',
      description: 'El usuario no existe'
    });
  }
});

router.get('/success/:token', (req, res) => {
  res.json({
    token: req.params.key
  });
});

module.exports = router;
