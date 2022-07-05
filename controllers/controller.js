const db = require("../models/db.js");
const Register = require("../models/RegisterModel.js");
const Post = require("../models/PostModel.js");
const Comment = require("../models/CommentModel.js");
const bcrypt = require('bcrypt');
var Username = null;
var loggedin = false;

const controller = {
	//-----------------------Handlebars Routing----------------------------//
	/*
		Check if there is an account in the Database.
    */
	getIndex: function (req, res) {
        db.findMany(Post, {}, null, (data) => {
			db.findMany(Comment, {}, null, (comment) => {
				const tempArrays = [];
				const tempArray = [];
				
				if (comment.length !== 0){
					comment.forEach(doc => tempArrays.push(doc.toObject()));
				}
				if (data.length !== 0){
					data.forEach(doc => tempArray.push(doc.toObject()));
				}
				
				if(loggedin == false && Username == null){
					res.render("homepage", {                         
                        title: 'Homepage',
                        customCSS1: '<link rel="stylesheet" type="text/css" href="/css/homepage.css">',
                        customJS1: '<script type="text/javascript" src="/js/homepage.js"></script>',
                        customJS2: '<script type="text/javascript" src="/js/hp.js"></script>',
                        data: tempArray, 
                        comment: tempArrays 
                    });
				} else {
					res.render("homepage2", {
                        title: 'Homepage',
                        customJS1: '<script type="text/javascript" src="/js/homepage.js"></script>',
                        customCSS1: '<link rel="stylesheet" type="text/css" href="/css/homepage.css">',
                        customJS2: '<script type="text/javascript" src="/js/hp.js"></script>',
                        data: tempArray, 
                        comment: tempArrays 
                    });
				}
			});
        });
    },
    redirectHP: (req, res) => {
        res.redirect("/getIndex");
    },

    loadLogin: (req, res) => {
        res.render("login", {
            title: "Login to Socrates",
            customCSS1: '<link rel="stylesheet" href="../css/login.css">',
            customJS1: '<script type="text/javascript" src="../js/login.js"></script>'
        });
    },

    loadRegister: function(req, res){
        res.render("register", {
            title: "Register Socrates Account",
            customCSS1: '<link rel="stylesheet" href="/css/register.css">',
            customJS1: '<script type="text/javascript" src="/js/register.js"></script>'
        });
    },

    loadProfile: function(req, res) {
        db.findMany(Register, { username: Username }, null, (user) =>{
			db.findMany(Post, { postUsername: Username }, null, (data) => {
				const tempArray = [];
				const tempArrays = [];
				
				if (user.length !== 0){
					user.forEach(doc => tempArrays.push(doc.toObject()));
				}
				
				if (data.length !== 0){
					data.forEach(doc => tempArray.push(doc.toObject()));
				}
				
				res.render("profiles", {
                    title: 'Profile Page',
                    customCSS1: '<link rel="stylesheet" type="text/css" href="/css/homepage.css">',
                    customCSS2: '<link rel="stylesheet" href="../css/profile.css">',
					user: tempArrays,
					data: tempArray
				});
			});
        });
    },
	loadAbout: function(req, res){
        if(loggedin == false){
            res.render("about", {
                title: "About Socrates",
                customCSS1: '<link rel="stylesheet" href="../css/about.css">'
            });
        } else {
            res.render("about2", {
                title: "About Socrates",
                customCSS1: '<link rel="stylesheet" href="../css/about.css">'
            });
        }
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
        const saltRounds = 10;
        bcrypt.hash(req.query.password1, saltRounds, (err, hash) =>{
            bcrypt.hash(req.query.password2, saltRounds, (err, hash) =>{
                db.insertOne(Register, req.query, (data) => {
                    console.log("User Added");
               });
            });
        });
    },
	
	//-----------------------Post Routing----------------------------//
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
	
	//-----------------------Comment Routing----------------------------//
	/*
		Check if Username has posted anything.
    */
	getCheckPostUsername: function(req, res) {
		db.findOne(Post, { postUsername: req.query.q }, null, (data) => {
			console.log("HELLO");
			res.send(data);
		});
    },
	
	/*
		Add Comment in the Homepage.
    */
	getAddComment: function(req, res) {
        var query = {
			commentUsername: Username,
			commenttedUsername: req.query.commenttedUsername,
            postComment: req.query.postComment
		};
		db.insertOne(Comment, query, (data) => {
			res.render('./partials/commenttemplate', query, (err, html) => {
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
	console.log('Session Ended');
        res.redirect('/endSession');
    },
};

module.exports = controller;
