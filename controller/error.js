const error = (req, res) => {             
    res.render('404', { title: 'Home Page',
  message: 'Error 404. Page not found!'});  // Render 404.ejs file.
  };

  module.exports = error;