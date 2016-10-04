var express = require('express');
var router = express.Router();
var list_users = require('./_list_users');

/**
 * Usado para abrir la ventana de inicio de sesion del api
 * Lado: API Universidad
 */
router.get('/open', (req, res) => {
  console.log('Open: ', req.query);

  var id_app = req.query.id;
  var url_redirect = req.query.redirect;

  if (id_app) {
    res.render('index', {
      title: 'Simulador Login',
      id_app: id_app,
      redirect: url_redirect
    });
  } else {
    res.json({status: 'ERROR 100', description: 'ID de aplicacion no encontrado'});
  }
});

/**
 * Iniciar sesión
 */
router.get('/sigin', (req, res) => {
  console.log('Sigin -> Query:', req.query);

  var user = req.query.email;
  var pass = req.query.pass;
  var url_redirect = req.query.redirect;
  var id_app = req.query.idapp;

  if (!url_redirect) {
    res.send("Se necesita URL de redirect");
  } else if (!id_app) {
    res.send("Se necesita ID de aplicacion");
  } else {
    list_users
      .get(user, pass)
      .then(value => {
        console.log('ElU: ', value);
        res.redirect('http://' + url_redirect + '?token=' + value.key);
      }, (err) => {
        console.log('ERRORR', err);

        res.json({state: 'ERROR 100', description: 'El usuario no existe'});
      });
  }
});

module.exports = router;
