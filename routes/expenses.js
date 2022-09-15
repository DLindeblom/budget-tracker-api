const router = require('express').Router()

// const users = ['Bob', 'Alex', 'Will', 'Tristan',"jose"];
/* GET users listing. */

module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query('SELECT * FROM expenses').then(data => {
      res.json(data.rows)
    });
  });

  router.post('/', (req, res) => { //add expense
    const queryString = `
      INSERT INTO expenses
      (budget_id, description, date, amount)
      VALUES ($1, $2, $3, $4)`

    const queryParams = [req.body.budgetId, req.body.description, req.body.date, req.body.amount]

    db.query(queryString, queryParams).then(data => {
      res.json(data)
    })
  })

  return router
}