const router = require('express').Router()


module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query('SELECT * FROM expenses').then(data => {
      res.json(data.rows)
    });
  });

  router.post('/', async (req, res) => { //add expense
    const queryString = `
      INSERT INTO expenses
      (budget_id, description, date, amount)
      VALUES ($1, $2, $3, $4)`

    const queryParams = [req.body.budgetId, req.body.description, req.body.date, req.body.amount]

    await db.query(queryString, queryParams).then((data) => {
      res.json(data)
    })
    
  })

  router.delete('/delete/:id', (req, res) => {
    const queryString = `
    DELETE FROM expenses
    WHERE id = $1
    `
    const queryParams = [req.params.id]

    db.query(queryString, queryParams).then(()=> {
      res.send(req.params)
    })
  })

  return router
}