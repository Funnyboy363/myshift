const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
require('dotenv').config(); //this is what helps to hide the login for MongoDB connection
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const errorController = require('./controllers/error');
const User = require('./models/user');

// const server = new ApolloServer({
//   typeDefs: schema.typeDefs,
//   resolvers: schema.resolvers
// });

const MONGODB_URI =
  'mongodb+srv://funnyboy363:qwertyu@testcluster-tcnpj.mongodb.net/test?retryWrites=true&w=majority';
 

  

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

let port = process.env.PORT
if (port == null || port == '') {
const port = 8000;
}

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(port, () => {
      console.log(`Your node js server is running on port ${port}`);
  });
  })
  .catch(err => {
    console.log(err);
  });
