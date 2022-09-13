const router = require('express').Router()

const users = ['Bob', 'Alex', 'Will', 'Tristan',"jose"];
/* GET users listing. */

module.exports = () => {

  router.get('/', function(req, res, next) {
    res.json(users);
  });

  return router
}

