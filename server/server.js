const express = require('express');
const config = require('config');
const TodoDB = require('./config/database');

const app = express();

TodoDB();
app.use(express.json());
app.use('/api/todo/createAcct', require('./routes/user'));
app.use('/api/todo/login', require('./routes/login'));
app.use('/api/todo', require('./routes/todo'));

const PORT = config.get('PORT');
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
