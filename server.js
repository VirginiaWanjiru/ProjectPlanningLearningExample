const express = require('express');
const catsRouter = require('./routes/cats.router');
const server = express();

server.use(express.json());
server.use('/cats', catsRouter);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
