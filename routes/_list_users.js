var list = [
  {
    user: 'jul.mora@udla.edu.co',
    pass: '123',
    key: Math.random() * 10000000000
  }, {
    user: 'yi.molina@udla.edu.co',
    pass: '12345',
    key: Math.random() * 10000000000
  }, {
    user: 'g.cortez@udla.edu.co',
    pass: '12345x1',
    key: Math.random() * 10000000000
  }, {
    user: 'jo.bermeo@udla.edu.co',
    pass: '1a2b3c',
    key: Math.random() * 10000000000
  }, {
    user: 'kel.ponte@udla.edu.co',
    pass: '1a2b3x',
    key: Math.random() * 10000000000
  }
]

module.exports = {
  get: (user, pass) => {
    return new Promise((resolve, reject) => {
      list.forEach((item) => {
        if (item.user == user && item.pass == pass) {
          console.log('Igual: ', item);
          resolve(item);
        }
      });
      reject(true);
    });
  }
}