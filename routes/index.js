var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    url:`http://localhost:3000/`
   })
});

/* GET home page. */
router.get('/contact-us', function(req, res, next) {
  res.render('contact', {
    url:`http://localhost:3000/`
   })
});

/* GET home page. */
router.get('/faq', function(req, res, next) {
  res.render('faq', {
    url:`http://localhost:3000/`
   })
});

module.exports = router;
