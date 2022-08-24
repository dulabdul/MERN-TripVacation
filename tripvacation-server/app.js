var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://dulabdul:dulabdul1521@cluster0.t9lyffm.mongodb.net/db_tripvacation?retryWrites=true&w=majority'
);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const apiRouter = require('./routes/api');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
const cors = require('cors');

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,
//   optionSuccessStatus: 200,
// };
app.use(cors());
let time = new Date(Date.now() + (30 * 86400 + 1000));
let sess = {
  secret: 'keyboard_cat',
  cookie: { maxAge: time },
  resave: false,
  saveUninitialized: true,
};
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/sb-admin-2',
  express.static(path.join(__dirname, 'node_modules/startbootstrap-sb-admin-2'))
);
app.use(session(sess));
app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/api/v1/member', apiRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
