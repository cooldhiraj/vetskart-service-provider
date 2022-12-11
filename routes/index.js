var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    url:`http://localhost:3000/`
   })
});

/* GET contact-us. */
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

/* GET home page. */
router.get('/confirm', function(req, res, next) {
  return res.render('confirm', {
    url:`http://localhost:3000/`
   })
});

/* GET home page. */
router.get('/error', function(req, res, next) {
  return res.render('error', {
    url:`http://localhost:3000/`
   })
});

/* GET home page. */
router.get('/user-present', function(req, res, next) {
  return res.render('user-present', {
    url:`http://localhost:3000/`
   })
});

module.exports = router;
