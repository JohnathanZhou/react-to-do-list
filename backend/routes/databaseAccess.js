const express = require('express');
const router = express.Router();

const testTodo = new TodoItem({
    task: "test task"
  });
  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
  });

router.get('/add', (req, res) => {
  res.send('Hello');
});

module.exports = router;
