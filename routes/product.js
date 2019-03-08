'use strict';
var router = require('express').Router();
var AV = require('leanengine');
var fs = require('fs');
var multiparty = require('multiparty');




// 查询 Todo 列表
router.get('/Butterfly', function(req, res, next) {
  var Todo = AV.Object.extend('Butterfly');

  var query = new AV.Query(Todo);
  query.descending('createdAt');
  query.find().then(function(results) {

    console.log(results,'err');


    res.render('product/Butterfly.html', {
      title: '活动列表',
      lists: results,
      user: req.currentUser,
    }

    // console.log(results.name,'666')

    );
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('product/Butterfly.html', {
        title: 'TODO 列表',
        lists: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});



router.get('/gate', function(req, res, next) {
  var Todo = AV.Object.extend('Gate');

  var query = new AV.Query(Todo);
  query.descending('createdAt');
  query.find().then(function(results) {

    // console.log(results,'err');


    res.render('product/gate.html', {
      title: '活动列表',
      lists: results,
      user: req.currentUser,
    }

    // console.log(results.name,'666')

    );
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('product/gate.html', {
        title: 'TODO 列表',
        lists: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});


router.get('/check', function(req, res, next) {
  var Todo = AV.Object.extend('Check');

  var query = new AV.Query(Todo);
  query.descending('createdAt');
  query.find().then(function(results) {

    // console.log(results,'err');


    res.render('product/check.html', {
      title: '活动列表',
      lists: results,
      user: req.currentUser,
    }

    // console.log(results.name,'666')

    );
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('product/check.html', {
        title: 'TODO 列表',
        lists: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

router.get('/ball', function(req, res, next) {
  var Todo = AV.Object.extend('Ball');

  var query = new AV.Query(Todo);
  query.descending('createdAt');
  query.find().then(function(results) {

    // console.log(results,'err');


    res.render('product/ball.html', {
      title: '活动列表',
      lists: results,
      user: req.currentUser,
    }

    // console.log(results.name,'666')

    );
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('product/ball.html', {
        title: 'TODO 列表',
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

    // console.log(results,'err');


    res.render('product/globe.html', {
      title: '活动列表',
      lists: results,
      user: req.currentUser,
    }

    // console.log(results.name,'666')

    );
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('product/globe.html', {
        title: 'TODO 列表',
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

    // console.log(results,'err');


    res.render('product/y.html', {
      title: '活动列表',
      lists: results,
      user: req.currentUser,
    }

    // console.log(results.name,'666')

    );
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 Todo 数据表还未创建，所以返回空的 Todo 列表。
      // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
      res.render('product/y.html', {
        title: 'TODO 列表',
        lists: []
      });
    } else {
      next(err);
    }
  }).catch(next);
});

// router.post('/upload', function(req, res){
//   var form = new multiparty.Form();
//   form.parse(req, function(err, fields, files) {
//     var iconFile = files.iconImage;
//     if(iconFile.size !== 0){
//       fs.readFile(iconFile.path, function(err, data){
//         if(err) {
//           return res.send('读取文件失败');
//         }
//         var theFile = new AV.File(iconFile.originalFilename, data);
//         theFile.save().then(function(theFile){
//           res.send('上传成功！');
//         }).catch(console.error);
//       });
//     } else {
//       res.send('请选择一个文件。');
//     }
//   });
// });

//   router.get('/product', function(req, res, next) {
//   res.render('product/product.html', { title: '洛阳微时光简易后台' });
// });

// 新增 Todo 项目

router.post('/Butterfly', function(req, res, next) {
var fs = require('fs');
  var Todo = AV.Object.extend('Butterfly');

    var form = new multiparty.Form();

    console.log(form.value,'990')
  form.parse(req, function(err, fields, files) {
// console.log(req,'req')

      var todo = new Todo();

    var iconFile = files.iconImage[0];
    // var iconFile = files.iconImage1[0];

    if(iconFile.size !== 0){
      fs.readFile(iconFile.path, function(err, data){
        if(err) {
          return res.send('读取文件失败');
        }
        var theFile = new AV.File(iconFile.originalFilename, data);
        var todo = new Todo();


        theFile.save().then(function(theFile){
                res.redirect('/ht/ht')

          console.log(theFile.url(),'123');

          todo.set('image',theFile.url());
          todo.set('image1',theFile.url());


          var content = fields.content[0];
          var introduce = fields.dizhi[0];
          // var time = fields.time[0];
          // var cishu = fields.cishu[0];
          // var jifen = fields.jifen[0];
          // var time1 = fields.time1[0];




// console.log(time1,'333')
          todo.set('name',content);
          todo.set('introduce',introduce)
          // todo.set('time',time);
          // todo.set('cash',Number(cishu));
          // todo.set('duihuan',Number(cishu));
          // todo.save('date1',time1)
          todo.save();
                res.redirect('/ht/ht')

        }).catch(console.error);
      });
    } 
    else {
      res.send('请选择一个文件。');
    }
  });



 // todo.set('name',content)
 //      // todo.set('image',theFile.url())

 //    todo.save().then(function(todo){
 //      res.redirect('/todos')
 //    })



});

router.post('/gate', function(req, res, next) {
var fs = require('fs');
  var Todo = AV.Object.extend('Gate');


    var form = new multiparty.Form();
  form.parse(req, function(err, fields, files) {


      var todo = new Todo();



    var iconFile = files.iconImage[0];
    if(iconFile.size !== 0){
      fs.readFile(iconFile.path, function(err, data){
        if(err) {
          return res.send('读取文件失败');
        }
        var theFile = new AV.File(iconFile.originalFilename, data);
        var todo = new Todo();


        theFile.save().then(function(theFile){
                res.redirect('/ht/gate')

          console.log(theFile.url(),'123');

          todo.set('image',theFile.url());

          var content = fields.content[0];
          var introduce = fields.dizhi[0];
          // var time = fields.time[0];
          // var cishu = fields.cishu[0];
          // var jifen = fields.jifen[0];
          // var time1 = fields.time1[0];




// console.log(time1,'333')
          todo.set('name',content);
          todo.set('introduce',introduce)
          // todo.set('time',time);
          // todo.set('cash',Number(cishu));
          // todo.set('duihuan',Number(cishu));
          // todo.save('date1',time1)
          todo.save();
                res.redirect('/ht/gate')

        }).catch(console.error);
      });
    } 
    else {
      res.send('请选择一个文件。');
    }
  });

});

router.post('/check', function(req, res, next) {
var fs = require('fs');
  var Todo = AV.Object.extend('Check');


    var form = new multiparty.Form();
  form.parse(req, function(err, fields, files) {


      var todo = new Todo();



    var iconFile = files.iconImage[0];
    if(iconFile.size !== 0){
      fs.readFile(iconFile.path, function(err, data){
        if(err) {
          return res.send('读取文件失败');
        }
        var theFile = new AV.File(iconFile.originalFilename, data);
        var todo = new Todo();


        theFile.save().then(function(theFile){
                res.redirect('/ht/check')

          console.log(theFile.url(),'123');

          todo.set('image',theFile.url());

          var content = fields.content[0];
          var introduce = fields.dizhi[0];
          // var time = fields.time[0];
          // var cishu = fields.cishu[0];
          // var jifen = fields.jifen[0];
          // var time1 = fields.time1[0];




// console.log(time1,'333')
          todo.set('name',content);
          todo.set('introduce',introduce)
          // todo.set('time',time);
          // todo.set('cash',Number(cishu));
          // todo.set('duihuan',Number(cishu));
          // todo.save('date1',time1)
          todo.save();
                res.redirect('/ht/check')

        }).catch(console.error);
      });
    } 
    else {
      res.send('请选择一个文件。');
    }
  });

});


router.post('/ball', function(req, res, next) {
var fs = require('fs');
  var Todo = AV.Object.extend('Ball');


    var form = new multiparty.Form();
  form.parse(req, function(err, fields, files) {


      var todo = new Todo();



    var iconFile = files.iconImage[0];
    if(iconFile.size !== 0){
      fs.readFile(iconFile.path, function(err, data){
        if(err) {
          return res.send('读取文件失败');
        }
        var theFile = new AV.File(iconFile.originalFilename, data);
        var todo = new Todo();


        theFile.save().then(function(theFile){
                res.redirect('/ht/ball')

          console.log(theFile.url(),'123');

          todo.set('image',theFile.url());

          var content = fields.content[0];
          var introduce = fields.dizhi[0];
          // var time = fields.time[0];
          // var cishu = fields.cishu[0];
          // var jifen = fields.jifen[0];
          // var time1 = fields.time1[0];




// console.log(time1,'333')
          todo.set('name',content);
          todo.set('introduce',introduce)
          // todo.set('time',time);
          // todo.set('cash',Number(cishu));
          // todo.set('duihuan',Number(cishu));
          // todo.save('date1',time1)
          todo.save();
                res.redirect('/ht/ball')

        }).catch(console.error);
      });
    } 
    else {
      res.send('请选择一个文件。');
    }
  });

});

router.post('/globe', function(req, res, next) {
var fs = require('fs');
  var Todo = AV.Object.extend('Globe');


    var form = new multiparty.Form();
  form.parse(req, function(err, fields, files) {


      var todo = new Todo();



    var iconFile = files.iconImage[0];
    if(iconFile.size !== 0){
      fs.readFile(iconFile.path, function(err, data){
        if(err) {
          return res.send('读取文件失败');
        }
        var theFile = new AV.File(iconFile.originalFilename, data);
        var todo = new Todo();


        theFile.save().then(function(theFile){
                res.redirect('/ht/globe')

          console.log(theFile.url(),'123');

          todo.set('image',theFile.url());

          var content = fields.content[0];
          var introduce = fields.dizhi[0];
          

          todo.set('name',content);
          todo.set('introduce',introduce)
         
          todo.save();
                res.redirect('/ht/globe')

        }).catch(console.error);
      });
    } 
    else {
      res.send('请选择一个文件。');
    }
  });

});

router.post('/y', function(req, res, next) {
var fs = require('fs');
  var Todo = AV.Object.extend('y');


    var form = new multiparty.Form();
  form.parse(req, function(err, fields, files) {


      var todo = new Todo();



    var iconFile = files.iconImage[0];
    if(iconFile.size !== 0){
      fs.readFile(iconFile.path, function(err, data){
        if(err) {
          return res.send('读取文件失败');
        }
        var theFile = new AV.File(iconFile.originalFilename, data);
        var todo = new Todo();


        theFile.save().then(function(theFile){
                res.redirect('/ht/y')

          console.log(theFile.url(),'123');

          todo.set('image',theFile.url());

          var content = fields.content[0];
          var introduce = fields.dizhi[0];
          

          todo.set('name',content);
          todo.set('introduce',introduce)
         
          todo.save();
                res.redirect('/ht/y')

        }).catch(console.error);
      });
    } 
    else {
      res.send('请选择一个文件。');
    }
  });

});



module.exports = router;
