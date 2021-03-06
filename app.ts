import {ErrorRequestHandler, RequestHandler} from 'express';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //设置视图目录:当前目录的views
app.set('view engine', 'ejs'); //设置试图引擎：ejs

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); //当用户访问根目录时，就使用indexRouter（点进去看看）
app.use('/users', usersRouter); //当用户访问/users时，就使用usersRouter（点进去看看）
console.log(`this is app.ts`);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
} as RequestHandler);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  next()
} as ErrorRequestHandler);

module.exports = app;
