var express = require('express');
var router = express.Router();

var users = {
  user: 'jul.mora@udla.edu.co',
  pass: '123',
  key: 'ksj23023s'
};

router.get('/sigin/:email/:pass/:url', (req, res) => {
  var user = req.params.email;
  var pass = req.params.pass;
  var url = req.params.url;

  console.log('Peticion: ', user, pass, url);
  
  if (!url) {
    res.send("Se necesita URL de redirect");
  }
  if (users.pass === pass && users.user === user) {
    if (url) {
      console.log('Logeado');
      res.redirect('http://' + url + '/?token=' + users.key);
    } else {
      res.send("Se necesita URL de redirect");
    }
  } else {
    res.json({state: 'ERROR 100', description: 'El usuario no existe'});
  }
});

router.get('/success/:token', (req, res) => {
  res.json({token: req.params.key});
});

module.exports = router;
