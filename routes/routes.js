const express = require('express');
const controller = require('../controllers/controllers.js');
const router = express.Router();

router.get('/', controller.redirectHP);
router.get('/homepage', controller.loadHP);
router.get('/login', controller.loadLogin);

module.exports = router;