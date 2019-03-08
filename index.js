//require allows you to access the dependencies
//this is  a node.js file
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

//this creates a route handler. get does this for us
//the back slash is for the certain route "localhost:5000/" aka root route
//req is the incoming request
//res is the response
//req and res are parameters for the arrow function below
// app.get('/', (req, res) => {
//   res.send({hi : "there"})
// })

passport.use(new GoogleStrategy());

//during runtime heroku will tell us which port to use through the env variables
const PORT  = process.env.PORT || 5000;

//express tells node to listen to port 5000
app.listen(PORT);
