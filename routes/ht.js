'use strict';
var router = require('express').Router();
var AV = require('leanengine');

// 查询 Todo 列表
router.get('/ht', function(req, res, next) {
    var Todo = AV.Object.extend('Butterfly');
console.log(req.connection.remoteAddress,'req')



        console.log(req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress,'566')
    var query = new AV.Query(Todo);
    query.descending('createdAt');
    query.find().then(function(results) {
        res.render('ht/ht.html', {
            title: 'Butterfly 列表',
            lists: results,
            user: req.currentUser,
        });
    }, function(err) {
        if (err.code === 101) {
            // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
            // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
            res.render('ht/ht.html', {
                title: 'Butterfly 列表',
                lists: []
            });
        } else {
            next(err);
        }
    }).catch(next);
});

router.get('/IPaddress', function(req, res, next) {
  var Todo = AV.Object.extend('IPaddress');

  var query = new AV.Query(Todo);
  query.descending('createdAt');
  query.find().then(function(results) {
    res.render('ht/IPaddress.html', {
      title: '产品列表',
      lists: results,
       user: req.currentUser,

    });
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('ht/IPaddress.html', {
        title: '产品列表',
        lists: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

router.get('/globe', function(req, res, next) {
    var Todo = AV.Object.extend('Globe');

    var query = new AV.Query(Todo);
    query.descending('createdAt');
    query.find().then(function(results) {
        res.render('ht/globe.html', {
            title: 'Butterfly 列表',
            lists: results,
            user: req.currentUser,
        });
    }, function(err) {
        if (err.code === 101) {
            // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
            // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
            res.render('ht/globe.html', {
                title: 'Butterfly 列表',
                lists: []
            });
        } else {
            next(err);
        }
    }).catch(next);
});

router.get('/email', function(req, res, next) {
    var Todo = AV.Object.extend('email');

    var query = new AV.Query(Todo);
    query.descending('createdAt');
    query.find().then(function(results) {
        res.render('ht/email.html', {
            title: '咨询邮件列表',
            lists: results,
            user: req.currentUser,
        });
    }, function(err) {
        if (err.code === 101) {
            // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
            // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
            res.render('ht/email.html', {
                title: '咨询邮件列表',
                lists: []
            });
        } else {
            next(err);
        }
    }).catch(next);
});

router.get('/y', function(req, res, next) {
    var Todo = AV.Object.extend('y');

    var query = new AV.Query(Todo);
    query.descending('createdAt');
    query.find().then(function(results) {
        res.render('ht/y.html', {
            title: 'Y strainer 产品列表',
            lists: results,
            user: req.currentUser,
        });
    }, function(err) {
        if (err.code === 101) {
            // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
            // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
            res.render('ht/y.html', {
                title: 'Y strainer 产品列表',
                lists: []
            });
        } else {
            next(err);
        }
    }).catch(next);
});

router.post('/ht', function(req, res, next) {

    var Todo = AV.Object.extend('Butterfly');


    var content = req.body.butt;

    console.log(content, '76')

    var query = new AV.Query(Todo);
    var status = req.query.status;

    // query.descending('createdAt');
    query.find().then(function(results) {

        // console.log(results.attributes,'err');

        for (var item in results) {
            // #{<%= lists[item].get("objectId") %>
            console.log(results[item].get('objectId'), '123')
            // console.log(item,'123')
        }

        var todo = AV.Object.createWithoutData('Butterfly', content);
        todo.destroy().then(function(success) {
            // res.redirect('/duihuan?status=' + status);
            res.redirect('/ht/ht');

        }, function(err) {
            res.redirect('/ht/ht');
        }).catch(next);


    })


});

router.post('/y', function(req, res, next) {

    var Todo = AV.Object.extend('y');


    var content = req.body.butt;

    console.log(content, '76')

    var query = new AV.Query(Todo);
    var status = req.query.status;

    // query.descending('createdAt');
    query.find().then(function(results) {

        // console.log(results.attributes,'err');

        for (var item in results) {
            // #{<%= lists[item].get("objectId") %>
            console.log(results[item].get('objectId'), '123')
            // console.log(item,'123')
        }

        var todo = AV.Object.createWithoutData('y', content);
        todo.destroy().then(function(success) {
            // res.redirect('/duihuan?status=' + status);
            res.redirect('/ht/y');

        }, function(err) {
            res.redirect('/ht/y');
        }).catch(next);


    })


});
router.get('/gate', function(req, res, next) {
    var Gate = AV.Object.extend('Gate');

    var query = new AV.Query(Gate);
    query.descending('createdAt');
    query.find().then(function(results) {
        res.render('ht/gate.html', {
            title: 'Gate 列表',
            lists: results,
            user: req.currentUser,
        });
    }, function(err) {
        if (err.code === 101) {
            // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
            // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
            res.render('ht/gate.html', {
                title: 'Gate 列表',
                lists: []
            });
        } else {
            next(err);
        }
    }).catch(next);
});


router.post('/gate', function(req, res, next) {

    var Todo = AV.Object.extend('Gate');


    var content = req.body.butt;

    console.log(content, '76')

    var query = new AV.Query(Todo);
    var status = req.query.status;

    // query.descending('createdAt');
    query.find().then(function(results) {

        // console.log(results.attributes,'err');

        for (var item in results) {
            // #{<%= lists[item].get("objectId") %>
            console.log(results[item].get('objectId'), '123')
            // console.log(item,'123')
        }

        var todo = AV.Object.createWithoutData('Gate', content);
        todo.destroy().then(function(success) {
            // res.redirect('/duihuan?status=' + status);
            res.redirect('/ht/gate');

        }, function(err) {
            res.redirect('/ht/gate');
        }).catch(next);


    })


});


router.get('/check', function(req, res, next) {
    var Gate = AV.Object.extend('Check');

    var query = new AV.Query(Gate);
    query.descending('createdAt');
    query.find().then(function(results) {
        res.render('ht/check.html', {
            title: 'Check 列表',
            lists: results,
            user: req.currentUser,
        });
    }, function(err) {
        if (err.code === 101) {
            // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
            // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
            res.render('ht/check.html', {
                title: 'Check 列表',
                lists: []
            });
        } else {
            next(err);
        }
    }).catch(next);
});

router.post('/check', function(req, res, next) {

    var Todo = AV.Object.extend('Check');


    var content = req.body.butt;

    console.log(content, '76')

    var query = new AV.Query(Todo);
    var status = req.query.status;

    // query.descending('createdAt');
    query.find().then(function(results) {

        // console.log(results.attributes,'err');

        for (var item in results) {
            // #{<%= lists[item].get("objectId") %>
            console.log(results[item].get('objectId'), '123')
            // console.log(item,'123')
        }

        var todo = AV.Object.createWithoutData('Check', content);
        todo.destroy().then(function(success) {
            // res.redirect('/duihuan?status=' + status);
            res.redirect('/ht/check');

        }, function(err) {
            res.redirect('/ht/check');
        }).catch(next);


    })


});

router.get('/ball', function(req, res, next) {
    var Todo = AV.Object.extend('Ball');

    var query = new AV.Query(Todo);
    query.descending('createdAt');
    query.find().then(function(results) {
        res.render('ht/ball.html', {
            title: 'Butterfly 列表',
            lists: results,
            user: req.currentUser,
        });
    }, function(err) {
        if (err.code === 101) {
            // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
            // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
            res.render('ht/ball.html', {
                title: 'Butterfly 列表',
                lists: []
            });
        } else {
            next(err);
        }
    }).catch(next);
});

router.post('/ball', function(req, res, next) {

    var Todo = AV.Object.extend('Ball');


    var content = req.body.butt;

    console.log(content, '76')

    var query = new AV.Query(Todo);
    var status = req.query.status;

    // query.descending('createdAt');
    query.find().then(function(results) {

        // console.log(results.attributes,'err');

        for (var item in results) {
            // #{<%= lists[item].get("objectId") %>
            console.log(results[item].get('objectId'), '123')
            // console.log(item,'123')
        }

        var todo = AV.Object.createWithoutData('Ball', content);
        todo.destroy().then(function(success) {
            // res.redirect('/duihuan?status=' + status);
            res.redirect('/ht/ball');

        }, function(err) {
            res.redirect('/ht/ball');
        }).catch(next);


    })


});


router.post('/globe', function(req, res, next) {

    var Todo = AV.Object.extend('Globe');


    var content = req.body.butt;

    console.log(content, '76')

    var query = new AV.Query(Todo);
    var status = req.query.status;

    // query.descending('createdAt');
    query.find().then(function(results) {

        // console.log(results.attributes,'err');

        for (var item in results) {
            // #{<%= lists[item].get("objectId") %>
            console.log(results[item].get('objectId'), '123')
            // console.log(item,'123')
        }

        var todo = AV.Object.createWithoutData('Globe', content);
        todo.destroy().then(function(success) {
            // res.redirect('/duihuan?status=' + status);
            res.redirect('/ht/globe');

        }, function(err) {
            res.redirect('/ht/globe');
        }).catch(next);


    })


});


router.post('/email', function(req, res, next) {

    var Todo = AV.Object.extend('email');


    var content = req.body.butt;

    console.log(content, '76')

    var query = new AV.Query(Todo);
    var status = req.query.status;

    // query.descending('createdAt');
    query.find().then(function(results) {

        // console.log(results.attributes,'err');

        for (var item in results) {
            // #{<%= lists[item].get("objectId") %>
            console.log(results[item].get('objectId'), '123')
            // console.log(item,'123')
        }

        var todo = AV.Object.createWithoutData('email', content);
        todo.destroy().then(function(success) {
            // res.redirect('/duihuan?status=' + status);
            res.redirect('/ht/email');

        }, function(err) {
            res.redirect('/ht/email');
        }).catch(next);


    })


});

// 新增 Todo 项目
// router.post('/', function(req, res, next) {
//     var fullname = req.body.fullname;

//     var email = req.body.email;

//     var subject = req.body.subject;

//     var message = req.body.message;

//     console.log(fullname, 'multiparty');

//     console.log(email, 'email');

//     console.log(subject, 'subject');

//     console.log(message, 'message');

//     var todo = new Todo();
//     todo.set('fullname', fullname);
//     todo.set('email', email);
//     todo.set('subject', subject);
//     todo.set('message', message);
//     todo.save();
//     res.redirect('/contact.html');



//     // todo.save().then(function(todo) {
//     //   res.redirect('/contact');
//     // }).catch(next);
// });

// // router.get('/index.html', function(req, res, next) {
// //     res.render('index.html', { title: ' ' });
// // });

// // 新增 Todo 项目
// router.post('/', function(req, res, next) {
//     var fullname = req.body.fullname;

//     var email = req.body.email;

//     var subject = req.body.subject;

//     var message = req.body.message;

//     console.log(fullname, 'multiparty');

//     console.log(email, 'email');

//     console.log(subject, 'subject');

//     console.log(message, 'message');

//     var todo = new Todo();
//     todo.set('fullname', fullname);
//     todo.set('email', email);
//     todo.set('subject', subject);
//     todo.set('message', message);
//     todo.save();
//     // res.redirect('/index');

//    res.redirect('/untitled.html');


//     // todo.save().then(function(todo) {
//     //   res.redirect('/contact');
//     // }).catch(next);
// });

module.exports = router;