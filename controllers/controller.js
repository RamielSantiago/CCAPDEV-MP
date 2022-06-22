const db = require("../models/db.js");
const Register = require("../models/RegisterModel.js");
const Post = require("../models/PostModel.js");

const controller = {
	//-----------------------Handlebars Routing----------------------------//
    redirectHP: (req, res) => {
        res.redirect("/homepage");
    },

    loadHP: (req, res) => {
        res.render("homepage", {
            title: "Welcome to Socrates",
            customCSS: '<link rel="stylesheet" href="CSS/homepage.css">'
        });
    },

    loadLogin: (req, res) => {
        res.render("login", {
            title: "Login to Socrates",
            customCSS: '<link rel="stylesheet" href="CSS/login.css">'
        });
    },

    loadRegister: (req, res) =>{
		console.log("Hello");
        res.render("register", {
            title: "Register Socrates Account",
            customCSS: '<link rel="stylesheet" href="CSS/register.css">'
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
		console.log("Hello2");
		db.findOne(Register, { username: req.query.q }, null, (data) => {
			res.send(data);
		});
		
    },

    /*
		Add account in the Database
    */
    getAdd: function(req, res) {
		console.log("Hello3");
		db.insertOne(Register, req.query, (data) => {
			console.log("User Added");
		});
    },
	
	//-----------------------Post Routing----------------------------//
	/*
		Check if there is an account in the Database.
    */
	getIndex: function (req, res) {
		console.log("Hello there");
        db.findMany(Post, {}, null, (data) => {
            res.render("homepage", { data: data }); 
        });
    },
	
	/*
		Add Post in the Homepage.
    */
    getAddPost: function(req, res) {
		console.log("Hello there2");
		db.insertOne(Post, req.query, (data) => {
			res.render('./partials/posttemplate', req.query, (err, html) => {
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
    }
};

module.exports = controller;
