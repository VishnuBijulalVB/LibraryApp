// import express module
const express = require("express");

// Route handler for /books page
const authorsRouter = express.Router();

function router(nav){
  var authors = [
    {
      name: 'JK Rowling',
      publications: 'Harry Potter Series',
      country: 'England',
      img: "rowling.jpg"
    },
    {
      name: 'Rick Riordan',
      publications: 'Heroes of Olympus, Trials of Apollo',
      country: 'USA',
      img: "riordan.jpg"
    },
    {
      name: 'Brandon Sanderson',
      publications: 'Stormlight Archive, Mistborn',
      country: 'USA',
      img: "sanderson.jpg"
    }
  ];
  
  // For authors.ejs is the root for authorsRouter
  authorsRouter.get('/',function(req,res){
    res.render("authors",{
      nav,
      title: 'Library | Authors',
      authors
    })
  });
  
  // eg: /books/1  1 is the parameter
  // this parameter from url is accessed using :
  authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render("author",{
      nav,
      title: 'Library | ' + authors[id].name,
      author: authors[id]
    })
  })

  return authorsRouter;
}

module.exports = router;