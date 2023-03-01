const express = require('express');   // Include the express module.
const bodyParser = require('body-parser');   // Include the body-parser module.
const mysql = require('mysql2');  // Include the latest mysql module.
// Import local modules.
const homePage = require('./controller/home');
const createPage = require('./controller/create');
const error = require('./controller/error');
const showUser = require('./controller/show');
const myDB = require('./model/database');
const addUser = require('./model/add');

const user = express();   // Creates an instance of the express() function and assigns it to a constant variable user.

user.set('view engine', 'ejs');  // Setting up the Ejs template engine.
user.set('views', 'views');  // View the files of view directory.

user.use(bodyParser.urlencoded({ extended: false }));  // Parsing the URL-encoded data.

// connect the database.
myDB.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
  /*const createTable = `CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )`;
  myDB.query(createTable, (err, result) => {
    if (err) throw err;
    console.log(result);
    console.log('Users table created!');
  });*/
});

// '/' Route
user.get('/', homePage);              
  
// 'create' Route 
user.get('/create', createPage);

// Call POST request to "/add" and store user name in database.
user.post('/add', addUser);

// 'users' route
user.get('/users', showUser); // show the usernames stored in the database.

// 404 page.
user.get('*', error);

// Spin Node.js server on port 3030.
user.listen(3060, () => {
  console.log('Server listening on port 3060!');
});