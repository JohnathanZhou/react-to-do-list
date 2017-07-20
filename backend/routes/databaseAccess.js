const express = require('express');
const router = express.Router();
var TodoItem = require('../models/Todoitem.js').TodoItem


console.log("hii");

// router.get('/testing', (req, res) => {
//   res.send(200);
// })

router.post('/add', (req, res) => {
  console.log("reqq: ", req);
  const testTodo = new TodoItem({
      task: req.body.taskText,
      completed: false
  });
  testTodo.save()
      .then(response => {
        res.send(response);
      })
      .catch(error => {
        res.send(error);
      })
});

module.exports = router;
