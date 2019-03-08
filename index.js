//require allows you to access the dependencies
//this is  a node.js file
const express = require('express');
require('./services/passport');
const app = express();

//importing the auth routes and calling the function on the app as a paramteter
require('./routes/authRoutes')(app);
//during runtime heroku will tell us which port to use through the env variables
const PORT  = process.env.PORT || 5000;

//express tells node to listen to port 5000
app.listen(PORT);
