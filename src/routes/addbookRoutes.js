// import express module
const express = require("express");

// Route handler for /login page
const addbookRouter = express.Router();

function router(nav){
  
  // For addbook.ejs is the root for addbookRouter
  addbookRouter.get('/',function(req,res){
    res.render("addbook",{
      nav,
      title: 'Library | Add Book'
    })
  });

  return addbookRouter;
}

module.exports = router;