'use strict';
var router = require('express').Router();
var AV = require('leanengine');
var fs = require('fs');
var multiparty = require('multiparty');
var mod = require('./shop.js');



// var Todo = AV.Object.extend('Butterfly');
// var Todo = AV.Object.extend('Gate');
// var Todo = AV.Object.extend('Ball');
// var Todo = AV.Object.extend('Chcek');
// var Todo = AV.Object.extend('Globe');
// var Todo = AV.Object.extend('y');

router.get('/', function(req, res, next) {
    var Todo = AV.Object.extend('Butterfly');

    let id = req.query.id;
    res.locals.id = id;



    // console.log(id, '123');
    // console.log(req,'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {
            // console.log(results.get('nickName'),'000');

            res.render('single-product.html', {
                title: results.attributes.name,
                lists: results,
                // user: req.currentUser,

            })
            // console.log(results,'results')

        },

        function(err) {
            // res.redirect('/users/login');

        }
    );

    var Todo1 = AV.Object.extend('Gate');


    var query1 = new AV.Query(Todo1);

    query1.get(id).then(function(results) {
            // console.log(results.get('nickName'),'000');

            res.render('single-product.html', {
                title: results.attributes.name,
                lists: results,
                // user: req.currentUser,

            })
        },


    );

    var Todo2 = AV.Object.extend('Ball');

    var query2 = new AV.Query(Todo2);

    query2.get(id).then(function(results) {
            // console.log(results.get('nickName'),'000');

            res.render('single-product.html', {
                title: results.attributes.name,
                lists: results,
                // user: req.currentUser,

            })
        },


    );

    var Todo3 = AV.Object.extend('Check');

    var query3 = new AV.Query(Todo3);

    query3.get(id).then(function(results) {
            // console.log(results.get('nickName'),'000');

            res.render('single-product.html', {
                title: results.attributes.name,
                lists: results,
                // user: req.currentUser,

            })
        },


    );

    var Todo4 = AV.Object.extend('Globe');

    var query4 = new AV.Query(Todo4);

    query4.get(id).then(function(results) {
            // console.log(results.get('nickName'),'000');

            res.render('single-product.html', {
                title: results.attributes.name,
                lists: results,
                // user: req.currentUser,

            })
        },


    );

     var Todo5 = AV.Object.extend('y');

    var query5 = new AV.Query(Todo5);

    query5.get(id).then(function(results) {

            res.render('single-product.html', {
                title: results.attributes.name,
                lists: results,
                // user: req.currentUser,

            })
        },


    );

});



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

module.exports = router;