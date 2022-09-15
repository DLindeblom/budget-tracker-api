const router = require('express').Router()

// const users = ['Bob', 'Alex', 'Will', 'Tristan',"jose"];
/* GET users listing. */

module.exports = (db) => {

  router.get('/', function(req, res, next) {
    db.query('SELECT * FROM budgets').then(data => {
      res.json(data.rows)
    });
  });

  router.post('/', async (req, res) => {
    const queryString = `
    INSERT INTO budgets
    (user_id, name, max) VALUES
    ($1, $2, $3)
    `
    const queryParams = [1, req.body.name, req.body.max]

    const {response} = await db.query(queryString, queryParams)
    res.json(response)
  })

  return router
}