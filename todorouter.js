const express = require('express');
const router = express.Router();
const {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo
} = require('../controllers/todos.controller');

// POST request to create a todo
router.post('/', createTodo);

// GET request to read all todos
router.get('/', readTodos);

// PUT request to update a todo by ID
router.put('/:id', updateTodo);

// DELETE request to delete a todo by ID
router.delete('/:id', deleteTodo);

module.exports = router;