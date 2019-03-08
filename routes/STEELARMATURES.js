// 'use strict';
// var router = require('express').Router();
// var AV = require('leanengine');
// var fs = require('fs');
// var multiparty = require('multiparty');
// var mod = require('./shop.js');



// var Todo = AV.Object.extend('Butterfly');


// router.get('/', function(req, res, next) {
//     let id = req.query.id;
//     res.locals.id = id;


//     console.log(id, '123');

       

//     var query = new AV.Query(Todo);

//     query.get(id).then(function(results) {
//             // console.log(results.get('nickName'),'000');

//             res.render('single-product.html', {
//                 title: '活动信息',
//                 lists: results,
//                 user: req.currentUser,

//             })


//         },

//         function(err) {
//             res.redirect('/users/login');

//         }
//     );

// });


// router.post('/', function(req, res, next) {


//     // var content = req.body.content;
//     // var todo = new Todo();
//     // todo.set('content', content);
//     // todo.save().then(function(todo) {
//     //   res.redirect('/todos');
//     // }).catch(next);

//     // let id = req.query.id;

//     // var name = req.body.name;
//     // var content = req.body.objectId;

//     var content = req.body.objectId

//     console.log(content, 'sqk')

//     // var query = new AV.Query(Todo);
//     // query.find().then(function(results){
//     //     // console.log(results,'666')

//     //     for (var item in results){
//     //     // console.log(results[item].get('objectId'),'000')


//     //     }

//     // });

//     var name = req.body.name;

//     var dizhi = req.body.dizhi;

//     var cash = req.body.cash;

//     var duihuan = req.body.duihuan;

//     var time = req.body.time;

//     var time1 = req.body.time1;





//     console.log(name);
//     console.log(dizhi);
//     console.log(cash);
//     console.log(duihuan);
//     console.log(time);
//     console.log(time1);

//     // var todo = new Todo();
//     var todo = AV.Object.createWithoutData('list', content);

//     todo.set('name', name);
//     todo.set('dizhi', dizhi);
//     todo.set('cash', Number(cash));
//     todo.set('duihuan', Number(duihuan));
//     todo.set('time', time);
//     todo.save('date1',time1)
//     todo.save().then(function(results) {
//         res.redirect('/todos');
//     }).catch(next);



// });

// module.exports = router;