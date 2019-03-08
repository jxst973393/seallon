'use strict';
var router = require('express').Router();
var AV = require('leanengine');
// var ue = UE.getEditor('editor');


// 查询 Todo 列表
router.get('/shops', function(req, res, next) {
  var Todo = AV.Object.extend('Butterfly');

  var query = new AV.Query(Todo);
  query.descending('createdAt');
  query.find().then(function(results) {
    res.render('shop/shops.html', {
      title: '产品列表',
      lists: results,
       // user: req.currentUser,

    });
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('shop/shops.html', {
        title: '产品列表',
        lists: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

router.get('/gate', function(req, res, next) {
  var Gate = AV.Object.extend('Gate');

  var query = new AV.Query(Gate);
  query.descending('createdAt');
  query.find().then(function(results) {
    res.render('shop/gate.html', {
      title: '产品列表',
      lists: results,
       // user: req.currentUser,

    });
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('shop/gate.html', {
        title: '产品列表',
        lists: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

router.get('/ball', function(req, res, next) {
  var Gate = AV.Object.extend('Ball');

  var query = new AV.Query(Gate);
  query.descending('createdAt');
  query.find().then(function(results) {
    res.render('shop/ball.html', {
      title: '产品列表',
      lists: results,
       // user: req.currentUser,

    });
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('shop/ball.html', {
        title: '产品列表',
        lists: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

router.get('/check', function(req, res, next) {
  var Gate = AV.Object.extend('Check');

  var query = new AV.Query(Gate);
  query.descending('createdAt');
  query.find().then(function(results) {
    res.render('shop/check.html', {
      title: '产品列表',
      lists: results,
       // user: req.currentUser,

    });
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('shop/check.html', {
        title: '产品列表',
        lists: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

router.get('/globe', function(req, res, next) {
  var Gate = AV.Object.extend('Globe');

  var query = new AV.Query(Gate);
  query.descending('createdAt');
  query.find().then(function(results) {
    res.render('shop/globe.html', {
      title: '产品列表',
      lists: results,
       // user: req.currentUser,

    });
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('shop/globe.html', {
        title: '产品列表',
        lists: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

router.get('/y', function(req, res, next) {
  var Gate = AV.Object.extend('y');

  var query = new AV.Query(Gate);
  query.descending('createdAt');
  query.find().then(function(results) {
    res.render('shop/y.html', {
      title: '产品列表',
      lists: results,
       // user: req.currentUser,

    });
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('shop/y.html', {
        title: '产品列表',
        lists: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

// router.get('/all', function(req, res, next) {
//   // var Gate = AV.Object.extend('Globe');

//   var query = new AV.Query(Gate);
//   query.descending('createdAt');
//   query.find().then(function(results) {
//     res.render('shop/all.html', {
//       title: '产品列表',
//       lists: results,
//        // user: req.currentUser,

//     });
//   }, function(err) {
//     if (err.code === 101) {
//       // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
//       // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
//       res.render('shop/all.html', {
//         title: '产品列表',
//         lists: []
//       });
//     } else {
//       next(err);
//     }
//   }).catch(next);
// });
// router.get('/single-product', function(req, res, next) {
//     // let id = req.query.id;
//     // res.locals.id = id;

//     let id = req.params.id;
//     res.locals.id = id;
 
//     console.log(id, '123');
//     // console.log(req,'ttt')
       

//     var query = new AV.Query(Todo);

   

//     query.get(id).then(function(results) {
//             // console.log(results.get('nickName'),'000');

//             res.render('single-product.html', {
//                 title: results.attributes.name,
//                 lists: results,
//                 // user: req.currentUser,

//             })
// // console.log(results,'results')

//         },

//         function(err) {
//             // res.redirect('/users/login');

//         }
//     );



// });
// router.get('/shop', function(req, res, next) {
//     res.render('shop.html', { title: ' ' });
// });

// 新增 Todo 项目
// router.post('/', function(req, res, next) {
//   var content = req.body.ccc;
    

//   var ccc = req;
//   console.log(ccc, 'ccc');

//   console.log(content, 'multiparty');

//   var todo = new Todo();
//   todo.set('content', content);
//   todo.save().then(function(todo) {
//     res.redirect('/todos');
//   }).catch(next);
// });

module.exports = router;
