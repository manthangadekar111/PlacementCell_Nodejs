const express = require('express');
const port = 8000;
const dotenv = require('dotenv');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-startegy');

dotenv.config({ path: 'config/.env' });

const app = express();

// set ejs as view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(
  session({
    // secret: process.env.SECRET,
    secret : "your secret",
    resave: false,
    saveUninitialized: false,
    cookie: { expiry: 1000 * 60 * 60 },
  })
);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(express.urlencoded({ extended: true }));

// using passport for authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// using express router
app.use('/', require('./routes'));

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('server is running on port'+port);
});

