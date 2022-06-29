const db = require("../models/db.js");
const Register = require("../models/RegisterModel.js");
const Post = require("../models/PostModel.js");
var Username = null;
var loggedin = false;

const controller = {
	//-----------------------Handlebars Routing----------------------------//
    redirectHP: (req, res) => {
        res.redirect("/getIndex");
    },

    loadLogin: (req, res) => {
        res.render("login", {
            title: "Login to Socrates",
            customCSS: '<link rel="stylesheet" href="CSS/login.css">'
        });
    },

    loadRegister: function(req, res){
        res.render("register", {
            title: "Register Socrates Account",
            customCSS: '<link rel="stylesheet" href="CSS/register.css">'
        });
    },

    loadProfile: function(req, res) {
        db.findOne(Register, { username: Username }, null, (data) =>{
           /* res.render("profiles", {
                title: "Profile Page",
                customCSS: '<link rel="stylesheet" href="../CSS/profile.css">'
            });*/
        });
    },
	
    getFavicon: function (req, res) {
        res.status(204);
    },

	//-----------------------Register Routing----------------------------//
	
    /*
		Check if username exists in the database
    */
    getCheckUsername: function(req, res) {
		db.findOne(Register, { username: req.query.q }, null, (data) => {
			res.send(data);
		});
    },

    /*
		Add account in the Database
    */
    getAdd: function(req, res) {
		db.insertOne(Register, req.query, (data) => {
			console.log("User Added");
		});
    },
	
	//-----------------------Post Routing----------------------------//
	/*
		Check if there is an account in the Database.
    */
	getIndex: function (req, res) {
        db.findMany(Post, {}, null, (data) => {
			const tempArray = [];
			if (data.length !== 0){
				data.forEach(doc => tempArray.push(doc.toObject()));
			}
            if(loggedin == false && Username == null){
                res.render("homepage", { data: tempArray });
            } else {
                res.render("homepage2", { data: tempArray });
            }
        });
    },
	
	/*
		Add Post in the Homepage.
    */
    getAddPost: function(req, res) {
        var query = {postUsername: Username,
                     postTitle: req.query.postTitle,
                     desc: req.query.desc,
                     postPhoto: req.query.postPhoto};
		db.insertOne(Post, query, (data) => {
			res.render('./partials/posttemplate', query, (err, html) => {
                res.send(html);
            });
		});
    },

	//-----------------------Login Routing----------------------------//
	/*
		Check if there is an account in the Database.
    */
    CheckLogin: function(req, res){
        db.findOne(Register, { username: req.query.username, password: req.query.password }, null, (data) => {
		    res.send(data);
	  	});
    },
    getUsername: function(req, res){
        res.send(Username);
    },
    /*
        Stores the username used in the login for future use.
    */ 
    AllowLogin: function(req, res) {
        Username = req.query.username;
        console.log(Username);
        loggedin = true;
        res.sendStatus(200);
    },

    /*
        Resets values that indicate a user is logged in.
    */ 
    Logout: function(req, res){
        Username = null;
        loggedin = false;
        res.redirect('/');
    }
};

module.exports = controller;
