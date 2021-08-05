// import express module
const express = require("express");

// Route handler for /login page
const loginRouter = express.Router();

function router(nav){
  // var creds = {
  //     username: 'admin',
  //     password: 'admin'
  //   };
  
  // For login.ejs is the root for loginRouter
  loginRouter.get('/',function(req,res){
    res.render("login",{
      nav,
      title: 'Library | LogIn'
      // creds
    })
  });

  return loginRouter;
}

module.exports = router;