const db = require('../model/database');

const showUser = (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
      if (err) {
        console.log('No users found'); 
      } else {
        res.render('usernames', { title: 'Show User', users: result}); // render the usernames.ejs file
      }
    });
  };

  module.exports = showUser;