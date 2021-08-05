// import express module
const express = require("express");

// Route handler for /books page
const booksRouter = express.Router();

function router(nav){
  var books = [
    {
      title: 'Harry Potter',
      author: 'JK Rowling',
      genre: 'Fantasy',
      img: "h.jpg"
    },
    {
      title: 'Percy Jacksson',
      author: 'Rick Riordan',
      genre: 'Fantasy',
      img: "p.jpg"
    },
    {
      title: 'Stormlight Archives',
      author: 'Brandon Sanderson',
      genre: 'Fantasy',
      img: "s.jpg"
    }
  ];
  
  // For books.ejs is the root for booksRouter
  booksRouter.get('/',function(req,res){
    res.render("books",{
      // nav: [{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
      nav,
      title: 'Library',
      books
    })
  });
  
  // eg: /books/1  1 is the parameter
  // this parameter from url is accessed using :
  booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render("book",{
      // nav: [{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
      nav,
      title: 'Library',
      book: books[id]
    })
  })

  return booksRouter;
}

module.exports = router;