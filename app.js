var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var socketIo = require('socket.io');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const MessageRepositories = require('./App/Repositories/MessageRepositories');

var app = express();
var server = http.createServer(app); 
var io = socketIo(server); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

// Socket.IO connection handling
io.on('connection', function(socket) {
  console.log('A user connected');

  socket.on('message', function(data) {
    console.log('Message received: ' + JSON.stringify(data));

    if (!data || typeof data !== 'object' || !data.name || !data.message) {
      console.error('Invalid message data received:', data);
      return;
    }

    let name = data.name;
    let message = data.message;

    const messageRepositories = new MessageRepositories();

    messageRepositories.createMessage(name, message, function(err, result) {
      if (err) {
        console.error('Error saving message to database: ' + err);
        return;
      }
      console.log('Message saved to database: ' + JSON.stringify(result));
    });
  });

  // Disconnect event
  socket.on('disconnect', function() {
    console.log('A user disconnected');
  });
});


server.listen(3002, function() {
  console.log('Socket.IO server listening on port 3002');
});

module.exports = {
  app: app,
  server: server 
};
