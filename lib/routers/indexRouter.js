// set up ========================================
var express = require('express');
var indexCtrl = require('../controllers/indexController');
var router = express.Router();

router.route('/').get(indexCtrl.getIndex);

module.exports = router;                          //export the router to use it in index.js