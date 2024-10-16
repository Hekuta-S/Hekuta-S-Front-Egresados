const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRoute = require('./src/app/routes/users');

const app = express();

mongoose.connect('mongodb://localhost:27017/test1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/api/users', usersRoute);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
