//hi  //require allows you to access the dependencies
//this is  a node.js file
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize());
app.use(passport.session());

//importing the auth routes and calling the function on the app as a paramteter
require('./routes/authRoutes')(app);

//mongoose.connect(keys.mongoURI);
//during runtime heroku will tell us which port to use through the env variables
const PORT  = process.env.PORT || 5000;

//express tells node to listen to port 5000
app.listen(PORT);
