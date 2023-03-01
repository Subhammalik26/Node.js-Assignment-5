
const createPage = (req, res) => {             
    res.render('create', { title: 'Add User'});  // Render create.ejs file.
  };

  module.exports = createPage;