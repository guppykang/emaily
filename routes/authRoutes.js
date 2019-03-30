const passport = require('passport');
const express = require('express');
const path = require('path');


module.exports = app => {
  app.use(express.static(path.join(__dirname, '../client/build')));


  // app.get('/', (req, res) => {
  //   res.send({hi : "mom"})
  // })

  app.get(
    '/auth/google',
    passport.authenticate('google', {
       scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
  });

  app.get('/api/current_user', (req, res) => {

    res.send(req.user);
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
};

//this creates a route handler. get does this for us
//the back slash is for the certain route "localhost:5000/" aka root route
//req is the incoming request
//res is the response
//req and res are parameters for the arrow function below
