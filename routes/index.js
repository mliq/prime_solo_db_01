var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

// passport.authenticate is specifying our ‘local’ strategy that we created, and specifies a failure and success redirect.
router.post('/', passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/'
    })
);

module.exports = router;
