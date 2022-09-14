const router = require('express').Router()

// const users = ['Bob', 'Alex', 'Will', 'Tristan',"jose"];
/* GET users listing. */

module.exports = (db) => {

  router.get('/', function(req, res, next) {
    db.query('SELECT * FROM expenses').then(data => {
      res.json(data.rows)
    });
  });

  return router
}