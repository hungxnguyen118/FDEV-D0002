var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var moviesRouter = require('./routes/movies');
var messageRouter = require('./routes/message');
var dashboardRouter = require('./routes/dashboard');
var uploadRouter = require('./routes/upload_file');
var productsRouter = require('./routes/products');
var productRouter = require('./routes/product');
var donHangRouter = require('./routes/don_hang');
var phanQuyenRouter = require('./routes/phan_quyen');
var menuQuanTriRouter = require('./routes/menu');
var viewLogRouter = require('./routes/view_log');

var app = express();

app.use(cors());

var complete_log = (req, res, next) => {
  try {
      //console.log(hahaha.length);
      var string_log = '-200-' + '\n';
  
      fs.appendFileSync('./data_log/2020_12_23.log', string_log);
  }
  catch(err){
      var string_log = '-500-Server Internal Error' +  '\n';
      fs.appendFileSync('./data_log/2020_12_23.log', string_log);
  }

  next();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  //console.log(Date.now() + '-' + req.method + '-' + req.url);
  var string_log = Date.now() + '-' + req.method + '-' + req.url + '\n';
  fs.appendFileSync('./data_log/2020_12_23.log', string_log);
  next();
})

//app.use(complete_log);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/movies', moviesRouter);
app.use('/messages', messageRouter);
app.use('/upload', uploadRouter);
app.use('/dashboard', dashboardRouter);
app.use('/products', productsRouter);
app.use('/product', productRouter);
app.use('/don-hang', donHangRouter);
app.use('/phan-quyen', phanQuyenRouter);
app.use('/menu-quan-tri', menuQuanTriRouter);
app.use('/log', viewLogRouter);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  var string_log =  Date.now() + '-' + req.url + '-500-Server Internal Error-' + err.message + '\n';
  fs.appendFileSync('./data_log/2020_12_23.log', string_log);

  // render the error page
  res.status(err.status || 500);
  res.send("Server Error")
  //res.render('error');
});

module.exports = app;
