var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  console.log("发送成功")
  res.send({ msg: 'get返回成功' })
});
router.post('/login', function(req, res, next) {
  console.log("发送成功")
  res.send({ msg: 'get返回成功' })
});

module.exports = router;
