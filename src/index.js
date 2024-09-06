require('dotenv').config();
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

// mongoose
//   .connect(
//     'mongodb+srv://dharamutkarshgarg:wjA5fzpz22YziVZ6@cluster.bnhm0hz.mongodb.net/_inventry', /** cluster url */
//     {
//       useNewUrlParser: true,
//     }
//   )
//   .then(() => console.log('MongoDB is Connected Successfully'))
//   .catch((err) => console.log(err));


mongoose.connect(`mongodb+srv://${process.env.MONGODB_DATABASE_USERNAME}:${process.env.MONGODB_DATABASE_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.cxmnrjm.mongodb.net/${process.env.MONGODB_DATABASE_NAME}`, {
  useNewUrlParser: true
}).then(() => console.log('Connected to MongoDb => ' + process.env.MONGODB_CLUSTER_NAME))
  .catch(err => console.log(err))

app.use('/', frontend_route);
app.use('/', backend_route);

app.listen(3000, () => {
  console.log(
    `Server running => ` + `http://localhost:${3000}/`
  );
});