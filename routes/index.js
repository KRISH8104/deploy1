var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'ABOUT' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'CONTACT' });
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'PROJECTS' });
});

module.exports = router;
