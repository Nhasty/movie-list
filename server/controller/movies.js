const models = require('../models/movies.js');

module.exports = {
  get: function(req, res) {
    models.getAll()
      .then((data) => res.json(data))
      .catch((err) => console.log('cannot retrieve movie list data', err));
  },

  post: function(req, res) {
    models.postMovie(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        if (err.code === 'ER_DUP_ENTRY') {
          res.sendStatus(409);
        } else {
          res.sendStatus(500);
        }
      });
  },

  put: function(req, res) {
    models.updateMovie(req.body)
      .then(() => res.sendStatus(200))
      .catch(err => res.sendStatus(404));
  }
};