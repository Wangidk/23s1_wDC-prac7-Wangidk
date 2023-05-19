var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get('/brew', (req, res) => {
  const drink = req.query.drink;

  if (drink === 'tea') {
    res.send('A delicious cup of tea!');
  } else if (drink === 'coffee') {
    res.sendStatus(418);
  } else {
    res.sendStatus(400);
  }
});

var previousMessage = null;

app.post('/pass-it-on', (req, res) => {
  const message = req.body.message;

  if (!message || message.trim() === '') {
    res.sendStatus(400);
  } else {
    if (previousMessage === '') {
      previousMessage = message;
    }

    const responseMessage = previousMessage || 'first';

    previousMessage = message;

    res.send(responseMessage);
  }
});


module.exports = app;
