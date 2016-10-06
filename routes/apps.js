var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', (req, res) => {
  res.render('apps', {
    list: [{
      title: 'Votaciones',
      desc: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively',
      id_client: 23334,
      redirect: 'http://www.votaciones.com'
    }, {
      title: 'Visibilidad',
      desc: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively',
      id_client: 62645,
      redirect: 'http://www.visibilidad.com'
    }, {
      title: 'MDD',
      desc: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively',
      id_client: 3564,
      redirect: 'http://www.mdd.com'
    }]
  })
});

module.exports = router;
