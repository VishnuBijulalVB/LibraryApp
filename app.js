// import express module
const express = require("express");

// Route handler for /books page
// const booksRouter = express.Router();

var app = new express();
const port = process.env.PORT || 5000;

const nav = [
  {
    link:'/books',name:'Books'
  },
  {
    link:'/authors',name:'Authors'
  }
];

const booksRouter = require("./src/routes/bookRoutes")(nav);

// To use css, image and js files with express 
app.use(express.static('./public'));

// npm install ejs --save
// Rename index.html as index.ejs
// Set ejs as template engine
app.set('view engine','ejs');
app.set('views', __dirname + '/src/views');

// Use booksRouter for /books or /books/x or /books/x/y etc
app.use('/books',booksRouter);

// For root page ie /
app.get('/',function(req,res){
  // Without template engine
  // res.sendFile(__dirname + "/src/views/index.html")
  
  // With ejs template engine
  // Giving object as argument
  res.render("index",{
    // nav: [{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
    nav,
    title: 'Library'
  });
});

// For books page
// Use this method or use Route Handlers
// app.get('/books',function(req,res){
//   res.render("books",{
//     nav: [{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
//     title: 'Library'
//   })
// });


// var books = [
//   {
//     title: 'Harry Potter',
//     author: 'JK Rowling',
//     genre: 'Fantasy',
//     img: "h.jpg"
//   },
//   {
//     title: 'Percy Jacksson',
//     author: 'Rick Riordan',
//     genre: 'Fantasy',
//     img: "p.jpg"
//   },
//   {
//     title: 'Stormlight Archives',
//     author: 'Brandon Sanderson',
//     genre: 'Fantasy',
//     img: "s.jpg"
//   }
// ];

// // For books.ejs is the root for booksRouter
// booksRouter.get('/',function(req,res){
//   res.render("books",{
//     nav: [{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
//     title: 'Library',
//     books
//   })
// });

// // eg: /books/1  1 is the parameter
// // this parameter from url is accessed using :
// booksRouter.get('/:id',function(req,res){
//   const id = req.params.id;
//   res.render("book",{
//     nav: [{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
//     title: 'Library',
//     book: books[id]
//   })
// })

app.listen(port,()=>{console.log(`Server ready at ${port}`)});