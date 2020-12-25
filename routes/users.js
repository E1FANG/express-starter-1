var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hi! I am users');
});

router.get('/xxx',function (req,res,next){
  res.send('xxx send this phrase')
})

module.exports = router;
