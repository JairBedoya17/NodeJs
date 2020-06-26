const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/view1', (req, res) => {
    connection.query('SELECT * FROM canciones_mas_escuchadas', (err, result) => {
      res.render('views/view1', {
        view1: result
      });
    });
  });

};
