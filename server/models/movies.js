const db = require('../db');

module.exports = {
  getAll: function() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM movies', [], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  postMovie: function({title, watched}) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO movies (title, watched) VALUES (?, ?)', [title, watched], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  updateMovie: function({title, watched}) {
    return new Promise((resolve, reject) => {
      db.query('UPDATE movies SET watched = ? WHERE title = ?', [watched, title], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      })
    })
  }
};