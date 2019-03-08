'use strict';
var router = require('express').Router();
var AV = require('leanengine');

var Todo = AV.Object.extend('email');

// 查询 Todo 列表
// router.get('/', function(req, res, next) {


//  var city = req.city;

//     console.log(city,'city')
//     // var Todo = AV.Object.extend('Butterfly');

//     // var query = new AV.Query(Todo);
//     // query.descending('createdAt');
//     // query.find().then(function(results) {
//     //     res.render('index.html', {
//     //         title: 'TODO 列表',
//     //         todos: results
//     //     });
//     // }, function(err) {
//     //     if (err.code === 101) {
//     //         // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
//     //         // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
//     //         res.render('index.html', {
//     //             title: 'TODO 列表',
//     //             // todos: []
//     //         });
//     //     } else {
//     //         next(err);
//     //     }
//     // }).catch(next);
// });
var Todo = AV.Object.extend('email');

router.get('/contact', function(req, res, next) {
    res.render('contact.html', { title: ' ' });
});

// 新增 Todo 项目
router.post('/contact', function(req, res, next) {
    var fullname = req.body.fullname;

    var email = req.body.email;

    var subject = req.body.subject;

    var message = req.body.message;

    console.log(fullname, 'multiparty');

    console.log(email, 'email');

    console.log(subject, 'subject');

    console.log(message, 'message');

    var todo = new Todo();
    todo.set('fullname', fullname);
    todo.set('email', email);
    todo.set('subject', subject);
    todo.set('message', message);
    todo.save();
    res.redirect('/contact.html');



    // todo.save().then(function(todo) {
    //   res.redirect('/contact');
    // }).catch(next);
});

router.get('/', function(req, res, next) {
    
    res.render('index.html', { title: ' ' });
});

// 新增 Todo 项目
router.post('/', function(req, res, next) {

    var city = req.body.city;

    var fullname = req.body.fullname;

    var email = req.body.email;

    var subject = req.body.subject;

    var message = req.body.message;

    console.log(fullname, 'multiparty');

    console.log(email, 'email');

    console.log(subject, 'subject');

    console.log(message, 'message');

    console.log(city, 'city');

    var todo = new Todo();
    todo.set('fullname', fullname);
    todo.set('email', email);
    todo.set('subject', subject);
    todo.set('message', message);
    todo.save();
    // res.redirect('/index');

   res.redirect('/');


    // todo.save().then(function(todo) {
    //   res.redirect('/contact');
    // }).catch(next);
});

module.exports = router;