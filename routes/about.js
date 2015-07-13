var express = require('express');
var router = express.Router();

/* Get Home Page */
router.get('/', function(req, res, next){
	res.render('about', {title: 'About'});
});

// notice how we are not using '/about' because we are refering to the file that we are using

module.exports = router;