var express = require('express');
var app = module.exports = express();
const logger = require('./config').getCustomLogger();
const userDao = require('./dao').userDao;


app.get('/', function (req, res) {
  logger.info("Entro en la raiz");
  res.send('Hello World!');
});

app.get('/saveUser', function (req, res) {
  logger.info("Entro al routing");
  userDao.saveUser();
  res.send('Usuario salvado!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
