const express = require('express');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const controller = require('../controllers/controller.js');
const e = express();
const app = express.Router();

//-------- Webpages ----------//
app.get('/', controller.getIndex);
app.get('/getIndex', controller.getIndex);
app.get('/login', controller.loadLogin);
app.get('/register', controller.loadRegister);

//-------- Register Actions ---------//
app.get('/getCheckUsername', controller.getCheckUsername);
app.get('/addUser', controller.getAdd);

//-------- Login Actions ----------//
app.post('/CheckLogin', controller.CheckLogin);
app.get('/AllowLogin', controller.AllowLogin);
app.get('/Logout', controller.Logout);

//-------- Post Actions ----------//
app.get('/getIndex', controller.getIndex);
app.get('/addPost', controller.getAddPost);

module.exports = app;
