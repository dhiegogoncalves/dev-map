const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

mongoose.connect(
  'mongodb+srv://admin:dev-map@cluster0-jj1ch.mongodb.net/dev-map?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
