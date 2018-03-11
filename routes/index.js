var express = require('express');
var router = express.Router();
//var data = require('../data/home.json');


// /* GET home page. */
router.get('/', function(req, res, next) {
	// const body = renderToString(sheet.collectStyles(<App />)); // <-- collecting styles
 //  	const title = 'Server side Rendering with Styled Components';
 res.send('hello world');
 //  res.send(
 //    Html({
 //      body,
 //      styles, // <-- passing the styles to our Html template
 //      title
 //    })
 //  );
});


module.exports = router;
