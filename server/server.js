require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const registerRouter = require('./api/register');
const loginRouter = require('./api/login'); 
const userRouter = require('./api/user'); 
const galleryRouter = require('./api/gallery');
const app = express();
const port = process.env.PORT || 3000;
const conn_str = process.env.DB_CONNECTION_STRING;

mongoose.connect(conn_str, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

app.use(cors({
  origin: 'http://localhost:3001', // Replace with your frontend origin
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', registerRouter);
app.use('/api', loginRouter);
app.use('/api', galleryRouter);
app.use('/api', userRouter);
app.use('/uploads', express.static('uploads'));

app.use((req, res, next) => {
  next();
});

const server = app.listen(port, () => console.log(`Art Gallery Server running on http://localhost:${port}`));

if (typeof afterAll === 'function') {
  afterAll(() => {
    server.close();
    mongoose.connection.close();
  });
}

module.exports = app;
