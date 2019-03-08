'use strict';

var express = require('express');
var timeout = require('connect-timeout');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var AV = require('leanengine');
// var bodyParser = require('body-parser')
// var ueditor = require("ueditor")
var multiparty = require('multiparty');


// 加载云函数定义，你可以将云函数拆分到多个文件方便管理，但需要在主文件中加载它们
require('./cloud');

var app = express();


// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('css', path.join(__dirname, 'css'));
app.set('js', path.join(__dirname, 'js'));
app.set('assets', path.join(__dirname, 'assets'));
app.set('vendor', path.join(__dirname, 'vendor'));


// app.engine('html',ejs.__express);

// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').__express);  
// app.set('view engine', 'html');

// app.set('view engine', 'ejs');

app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// app.set('js',path.join(__dirname,'js'));

app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('assets'));
app.use(express.static('vendor'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

// app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function(req, res, next) {

//   // ueditor 客户发起上传图片请求

//   if(req.query.action === 'uploadimage'){

//     // 这里你可以获得上传图片的信息
//     var foo = req.ueditor;
//     console.log(foo.filename); // exp.png
//     console.log(foo.encoding); // 7bit
//     console.log(foo.mimetype); // image/png

//     // 下面填写你要把图片保存到的路径 （ 以 path.join(__dirname, 'public') 作为根路径）
//     var img_url = 'yourpath';
//     res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
//   }
//   //  客户端发起图片列表请求
//   else if (req.query.action === 'listimage'){
//     var dir_url = 'your img_dir'; // 要展示给客户端的文件夹路径
//     res.ue_list(dir_url) // 客户端会列出 dir_url 目录下的所有图片
//   }
//   // 客户端发起其它请求
//   else {

//     res.setHeader('Content-Type', 'application/json');
//     // 这里填写 ueditor.config.json 这个文件的路径
//     res.redirect('/ueditor/ueditor.config.json')
// }}));



// 设置默认超时时间
app.use(timeout('15s'));

// 加载云引擎中间件
app.use(AV.express());

app.enable('trust proxy');
// 需要重定向到 HTTPS 可去除下一行的注释。
// app.use(AV.Cloud.HttpsRedirect());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(AV.Cloud.CookieSession({ secret: 'randomString', maxAge: 3600000, fetchUser: true }));

// app.get('/', function(req, res) {

//     console.log("reqquery:",req.query);
//   res.render('index.html', { currentTime: new Date() });
// });

// app.get('/index2.html', function(req, res) {
//   res.render('index2.html', { currentTime: new Date() });
// });

app.get('/about.html',function(req,res) {
  res.render('about.html', {currentTime: new Date() });
});

app.get('/careers.html',function(req,res) {
  res.render('careers.html', {currentTime: new Date() });
});

app.get('/team.html',function(req,res) {
  res.render('team.html', {currentTime: new Date() });
});

app.get('/shop.html',function(req,res) {
  res.render('shop.html', {currentTime: new Date() });
});

app.get('/STEELARMATURES.html',function(req,res) {
  res.render('STEELARMATURES.html',{currentTime: new Date() });
});

app.get('/single-product.html',function(req,res) {
  res.render('single-product.html', {currentTime: new Date() });
});

// app.get('/untitled.html',function(req,res) {
//   res.render('untitled.html', {currentTime: new Date() });
// });

app.get('/contact.html',function(req,res) {
  res.render('contact.html', {currentTime: new Date() });
});

// 可以将一类的路由单独保存在一个文件中
app.use('/todos', require('./routes/todos'));
app.use('/contact', require('./routes/contact'));
// app.use('/shop', require('./routes/shop'));

// app.use('/', require('./routes/contact'));

app.use('/', require('./routes/index'));


app.use('/users', require('./routes/users'));
app.use('/ht', require('./routes/ht'));
app.use('/product', require('./routes/product'));
app.use('/single-product', require('./routes/single-product'));
app.use('/htlist', require('./routes/htlist'));
app.use('/shop', require('./routes/shop'));
app.use('/image', require('./routes/image'));


app.use(function(req, res, next) {
  // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器
  if (!res.headersSent) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

// error handlers
app.use(function(err, req, res, next) {
  if (req.timedout && req.headers.upgrade === 'websocket') {
    // 忽略 websocket 的超时
    return;
  }

  var statusCode = err.status || 500;
  if (statusCode === 500) {
    console.error(err.stack || err);
  }
  if (req.timedout) {
    console.error('请求超时: url=%s, timeout=%d, 请确认方法执行耗时很长，或没有正确的 response 回调。', req.originalUrl, err.timeout);
  }
  res.status(statusCode);
  // 默认不输出异常详情
  var error = {};
  if (app.get('env') === 'development') {
    // 如果是开发环境，则将异常堆栈输出到页面，方便开发调试
    error = err;
  }
  res.render('error', {
    message: err.message,
    error: error
  });
});

module.exports = app;
