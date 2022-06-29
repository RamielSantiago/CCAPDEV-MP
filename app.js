//Declaring dependencies
const http = require('http');
const path = require('path');
const express = require('express');
const favicon = require('express-favicon');
const exphbs = require('express-handlebars');
const session = require('express-session');
const bycrypt = require('bcrypt');
const MongoDBSession = require('connect-mongodb-session')(session);
const routes = require('./routes/routes.js');
const db = require('./models/db.js');

const app = express();
const port = 3000; //Port number

//Sets app to use static files for displays
app.use(express.static(__dirname + "/public"));

//Sets the app to use routes.js for page routing
app.use(`/`, routes);

//-------------Handlebars settings-----------------//
app.engine("hbs", exphbs.engine({extname: 'hbs'})); 
app.set("view engine", "hbs");
app.set("views", "./views");

//Database Connection
db.connect();

//------- Session Settings -------//
const store = new MongoDBSession({
    uri : 'mongodb+srv://Admin:C0tDKeQ0wr9XXSxy@ccapdev.zzznx.mongodb.net/CCAPDEV?retryWrites=true&w=majority',
    collection: 'Sessions'
});

app.use(session({
    secret: 'SOCRATES',
    cookie: {maxAge: 30000},
    resave: false,
    saveUninitialized: false,
    store: store
}));

//-------- Create/Destroy Session on Login/Logout ----------//
app.get('/createSession', (req, res) => {
    req.session.isAuthenticated = true;
    req.session.save((err) => {
        if(err){
            console.log(err);
            return err;
        }
        else{console.log("Session Created");}
    });
    console.log(req.session);
});

app.get('/endSession', (req, res) => {
    req.session.destroy();
    console.log('Session Ended');
    res.redirect('/Logout');
});

//Sets the port to listen to
app.listen(port, () => {
    console.log("Currently listening at Port " + port);
});