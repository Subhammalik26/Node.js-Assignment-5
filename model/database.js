const mysql = require('mysql2');  // Include the latest mysql module.

// connect the database.
const db = mysql.createConnection({    
    host: 'localhost',
    user: 'root',
    password: 'LenovoK@8+',
    database: 'node-complete'
  });

  module.exports = db;