const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
const app = express();
const frontend_route = require('./routes/frontend_route.js');
const backend_route = require('./routes/backend_route');

app.use(cookieParser());
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose
  .connect(
    '', /** cluster url */
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log('MongoDB is Connected Successfully'))
  .catch((err) => console.log(err));

app.use('/', frontend_route);
app.use('/', backend_route);

app.listen(3000, () => {
  console.log(
    `Server running`
  );
});