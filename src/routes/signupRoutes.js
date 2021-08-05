// import express module
const express = require("express");

// Route handler for /signup page
const signupRouter = express.Router();

function router(nav){
  
  // For signup.ejs is the root for signupRouter
  signupRouter.get('/',function(req,res){
    res.render("signup",{
      nav,
      title: 'Library | SignUp'
    })
  });

  return signupRouter;
}

module.exports = router;