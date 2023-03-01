
const homePage = (req, res) => {             
    res.render('index', { title: 'Home Page',
  message: 'Welcome to the 5th Assignment of Node.js course.'});
}; // render index.ejs file

module.exports = homePage;