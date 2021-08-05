// import express module
const express = require("express");

var app = new express();
const port = process.env.PORT || 5000;

// Navbar reuse
const nav = [
  {
    link:'/books',name:'Books'
  },
  {
    link:'/authors',name:'Authors'
  },
  {
    link:'/login',name:'LogIn'
  },
  {
    link:'/signup',name:'SignUp'
  },
  {
    link:'/addbook',name:'Add Book'
  },
  {
    link:'/addauthor',name:'Add Author'
  }
];

const booksRouter = require("./src/routes/bookRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const loginRouter = require("./src/routes/loginRoutes")(nav);
const signupRouter = require("./src/routes/signupRoutes")(nav);
const addbookRouter = require("./src/routes/addbookRoutes")(nav);
const addauthorRouter = require("./src/routes/addauthorRoutes")(nav);

// To use css, image and js files with express 
app.use(express.static('./public'));

// Set ejs as template engine
app.set('view engine','ejs');
app.set('views', __dirname + '/src/views');

// Use booksRouter for /books or /books/x or /books/x/y etc
app.use('/books',booksRouter);
// Use authorsRouter for /authors or /authors/x or /authors/x/y etc
app.use('/authors',authorsRouter);

app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);

// For root page ie /
app.get('/',function(req,res){
  res.render("index",{
    nav,
    title: 'Library'
  });
});

app.listen(port,()=>{console.log(`Server ready at ${port}`)});