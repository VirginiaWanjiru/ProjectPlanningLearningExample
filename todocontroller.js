let todos = [];

// Create a new todo
function createTodo(req, res) {
  const { title, priority } = req.body;
  const id = todos.length + 1;
  const createdAt = new Date();
  const newTodo = {
    id,
    title,
    priority,
    createdAt,
    done: false,
    doneAt: null
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
}

// Read all todos
function readTodos(req, res) {
  res.json(todos);
}

// Update a todo by ID
function updateTodo(req, res) {
    const { id } = req.params;
    const { title, priority, done } = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }
    todos[todoIndex].title = title || todos[todoIndex].title;
    todos[todoIndex].priority = priority || todos[todoIndex].priority;
    todos[todoIndex].done = done || todos[todoIndex].done;
    res.json(todos[todoIndex]);
  }

// Delete a todo by ID
function deleteTodo(req, res) {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }
    todos.splice(todoIndex, 1);
    res.sendStatus(204);
  }             

module.exports = {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo
};