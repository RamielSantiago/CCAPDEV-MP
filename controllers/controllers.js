const express = require('express');
const app = express();

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
        res.render("register", {
            title: "Register Socrates Account",
            customCSS: '<link rel="stylesheet" href="CSS/register.css">'
        });
    }
}

module.exports = controller;