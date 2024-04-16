const express = require('express');
const catsRouter = require('./routes/cats.router');
const todoRouter = require('./routes/todos.router');
const app = express();

app.use(express.json());
app.use('/cats', catsRouter);
app.use('/todos', todoRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
