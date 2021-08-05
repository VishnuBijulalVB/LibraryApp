// import express module
const express = require("express");

// Route handler for /login page
const addauthorRouter = express.Router();

function router(nav){
  
  // For addauthor.ejs is the root for addauthorRouter
  addauthorRouter.get('/',function(req,res){
    res.render("addauthor",{
      nav,
      title: 'Library | Add Author'
    })
  });

  return addauthorRouter;
}

module.exports = router;