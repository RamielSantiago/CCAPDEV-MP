const express = require('express');
const controller = require('../controllers/controller.js');

const app = express.Router();

//-------- Webpages ----------//
app.get('/', controller.getIndex);
app.get('/getIndex', controller.getIndex);
app.get('/login', controller.loadLogin);
app.get('/register', controller.loadRegister);

//-------- Register Actions ---------//
app.get('/getCheckUsername', controller.getCheckUsername);
app.get('/addUser', controller.getAdd);

//-------- Login Checking ----------//
app.post('/CheckLogin', controller.CheckLogin);

//-------- Post Actions ----------//
app.get('/getIndex', controller.getIndex);
app.get('/addPost', controller.getAddPost);

module.exports = app;
