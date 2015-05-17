var express = require('express');
var router = express.Router();
var path = require('path');
var Users = require('../models/user');

/* GET users page. */
router.get('/', function (req, res, next) {
    if (req.isAuthenticated() == true) {
        res.sendFile(path.resolve(__dirname, '../views/users.html'));
    } else {
        res.json(req.isAuthenticated());
    }
});

/* GET users list. */
router.get('/list', function (req, res, next) {
    if (req.isAuthenticated() == true) {
        Users.find(function (err, users) {
            if (err) return next(err);
            res.json(users);
        });
    } else {
        res.json(req.isAuthenticated());
    }
});


module.exports = router;
