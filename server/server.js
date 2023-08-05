require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const registerRouter = require('./api/register');
const app = express();
const port = process.env.PORT || 3000;
const conn_str = process.env.DB_CONNECTION_STRING;

mongoose.connect(conn_str, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/api', registerRouter);

const server = app.listen(port, () => console.log(`Art Gallery Server running on http://localhost:${port}`));

if (typeof afterAll === 'function') {
  afterAll(() => {
    server.close();
    mongoose.connection.close();
  });
}

module.exports = app;
