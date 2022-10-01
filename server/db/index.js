var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movieList'
});

connection.connect((err) => {
  if(err) {
    throw(err);
  };
})

module.exports = connection;