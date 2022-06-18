const express = require('express');
const controller = require('../controllers/controller.js');

const app = express.Router();

//-------- Webpages ----------//
app.get('/', controller.redirectHP);
app.get('/homepage', controller.loadHP);
app.get('/login', controller.loadLogin);
app.get('/register', controller.loadRegister);

//-------- Register Actions ---------//
app.get('/getCheckUsername', controller.getCheckUsername);
app.post('/addUser', controller.getAdd);

//-------- Login Checking ----------//
app.post('/CheckLogin', controller.CheckLogin);
module.exports = app;
