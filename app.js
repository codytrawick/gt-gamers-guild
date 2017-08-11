/**
 * Module dependencies.
 */

// come with NodeJS
const path = require('path');
const fs = require('fs');

// installed
const express = require('express');
const multer  = require('multer');
const bodyParser = require('body-parser');
const upload = multer({ dest: 'public/media/' });
const errorHandler = require('errorhandler');


/**
 * Controllers (route handlers).
 */
const controller = require(path.join(__dirname, 'controllers/index'));
const databaseController = require(path.join(__dirname, 'controllers/api/games-master-controller'));

/**
 * Create Express server.
 */
const app = express();
app.use(bodyParser.json());

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);

// set views (html)
app.set('views', [
    path.join(__dirname, '/views')
]);
app.set('view engine', 'pug');

// set routing
app.enable('strict routing');
const router = express.Router({
	caseSensitive		: app.get('case sensitive routing'),
	strict					: app.get('strict routing')
});
app.use(router);


// static files (i.e. styles, scripts, etc.)
app.use('/', express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use('/', express.static(path.join(__dirname, 'uploads'), { maxAge: 31557600000 }));

/**
 * App routes.
 */

router.get('/', controller.index);
router.get('', function(req, res) { res.redirect('/') });
router.get('/auth', controller.index);
router.get('/api', databaseController.query);
router.post('/uploadFile', upload.single('inputFile') , databaseController.uploadFile);


/**
 * 500 Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
