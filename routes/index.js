var express = require('express');
var router = express.Router();

app.use(cors())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    url:process.env.HOST_URL
   })
});

/* GET contact-us. */
router.get('/contact-us', function(req, res, next) {
  res.render('contact', {
    url:process.env.HOST_URL
   })
});

/* GET home page. */
router.get('/faq', function(req, res, next) {
  res.render('faq', {
    url:process.env.HOST_URL
   })
});

/* GET home page. */
router.get('/confirm', function(req, res, next) {
  return res.render('confirm', {
    url:process.env.HOST_URL
   })
});

/* GET home page. */
router.get('/error', function(req, res, next) {
  return res.render('error', {
    url:process.env.HOST_URL
   })
});

/* GET home page. */
router.get('/user-present', function(req, res, next) {
  return res.render('user-present', {
    url:process.env.HOST_URL
   })
});

module.exports = router;
