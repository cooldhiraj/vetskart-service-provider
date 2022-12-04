var express = require('express');
var router = express.Router();


router.post('/register', function(req, res, next) {
  console.log("register service provider")
   res.render('confirm', {
    url:`http://localhost:3000/`
   })
});

module.exports = router;
