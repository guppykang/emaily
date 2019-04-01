Authentication workflow using passport oauth 2.0 for google login
Using express and node.js for route handling 
Using Mongoose and MongoDB for storing user information . 

To run locally, run the node server. Node Server hosts the react app on elastic beanstalk.  

Important Information : Code must contain the following file(s) to work   

run "npm install" in both the root directory and the client directory   
  
Need to create environment variables via host (I'm using heroku)  
  
config/dev.js  :  
module.exports = {  
  googleClientID : 'FOUND ON PERSONAL GCP',  
  googleClientSecret : 'FOUDN ON PERSONAL GCP',  
  mongoURI: 'SRV STRING GENERATED FROM MONGODB CLUSTER',  
  cookieKey : 'ANY STRING HERE'  
};  



Work in Progress : Check commits for updates in code and features

