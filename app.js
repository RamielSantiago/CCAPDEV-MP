//-----------------------MongoDB connection---------------------------//
const dotenv = require('dotenv');
dotenv.config();
const conn = require('./db/conn.js');
conn.connectToMongo((err) => {
     if(err){
         console.log("An Error Occured");
         console.error(err);
         process.exit();
     }
     console.log("MongoDB connection established");
     const db = conn.getDb();
     db.createCollection("Users", (err, collection) => {
         if(err){
             console.log("Error during collection creation.");
             return;
         }
         console.log("Collection Created");
     });
});

//Declaring dependencies
const http = require('http');
const path = require('path');
const express = require('express');
const favicon = require('express-favicon');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000; //Port number

//Sets app to use static files for displays
app.use(express.static(__dirname + "/public"));

//-------------Handlebars settings-----------------//
app.engine("hbs", exphbs.engine({extname: 'hbs'})); 
app.set("view engine", "hbs");
app.set("views", "./views");

//-----------------------Handlebars Routing----------------------------//
app.get('/', (req, res) => {
    res.redirect('/homepage'); //Redirects to /homepage on page load
});
app.get('/homepage', (req, res) => {
    res.render("homepage", {
        title: "Welcome to Socrates",
        customCSS: '<link rel="stylesheet" href="CSS/homepage.css">'
    });
});
app.get('/login', (req, res) => {
    res.render("login", {
        title: "Login to Socrates",
        customCSS: '<link rel="stylesheet" href="CSS/login.css">'
    });
});
app.get('/register', (req, res) => {
    res.render("register", {
        title: "Register Socrates Account",
        customCSS: '<link rel="stylesheet" href="CSS/register.css">'
    });
});
//Sets the port to listen to
app.listen(port, () => {
    console.log("Currently listening at Port " + port);
});