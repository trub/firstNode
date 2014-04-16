var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'DIS BIZ', phrase: "yo yo yo yo yo yo" });
});

router.get('/dis-biz', function(req, res) {
  res.render('dis', { title: 'DIS BIZ', phrase: "yo yo yo yo yo yo" });
});

module.exports = router;
