const db = require('./database');

const addUser = (req, res) => {
    const name = req.body.userName; // store the entered names in the name object.
    const insertQuery = `INSERT INTO users (name) VALUES ('${name}')`; // insert entered names to the name column of the database.
    db.query(insertQuery, (err) => {
      if (err) throw err;
      console.log(`User ${name} added to database!`);
      res.redirect('/create');  // redirect to "create" route.
    });
  };

  module.exports = addUser;