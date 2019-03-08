'use strict';
var router = require('express').Router();
var AV = require('leanengine');
var fs = require('fs');
var multiparty = require('multiparty');
var mod = require('./ht.js');





router.get('/htlist', function(req, res, next) {

    var Todo = AV.Object.extend('Butterfly');

    let id = req.query.id;
    res.locals.id = id;


    // console.log(id, '123');
    // console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('htlist/htlist.html', {
                title: '产品名称',
                lists: results,
                user: req.currentUser,
            })
        },

        function(err) {
            res.redirect('/users/login');
        }
    );

    // var Todo1 = AV.Object.extend('Gate');


    // var query1 = new AV.Query(Todo1);

    // query1.get(id).then(function(results) {

    //         res.render('htlist/htlist.html', {
    //             title: '产品名称',
    //             lists: results,
    //             user: req.currentUser,

    //         })
    //     },

    //     function(err) {
    //         // res.redirect('/users/login');

    //     }
    // );



});

router.get('/check', function(req, res, next) {

    var Todo = AV.Object.extend('Check');

    let id = req.query.id;
    res.locals.id = id;


    // console.log(id, '123');
    // console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('htlist/check.html', {
                title: '产品名称',
                lists: results,
                user: req.currentUser,

            })
        },

        function(err) {
            // res.redirect('/users/login');
        }
    );



});


router.get('/ball', function(req, res, next) {

    var Todo = AV.Object.extend('Ball');

    let id = req.query.id;
    res.locals.id = id;


    // console.log(id, '123');
    // console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('htlist/ball.html', {
                title: '产品名称',
                lists: results,
                user: req.currentUser,

            })
        },

        function(err) {
            // res.redirect('/users/login');
        }
    );



});

router.get('/email', function(req, res, next) {

    var Todo = AV.Object.extend('email');

    let id = req.query.id;
    res.locals.id = id;


    // console.log(id, '123');
    // console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('htlist/email.html', {
                title: '产品名称',
                lists: results,
                user: req.currentUser,
            })
        },

        function(err) {
            res.redirect('/users/login');
        }
    );

});


router.get('/globe', function(req, res, next) {

    var Todo = AV.Object.extend('Globe');

    let id = req.query.id;
    res.locals.id = id;


    // console.log(id, '123');
    // console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('htlist/globe.html', {
                title: '产品名称',
                lists: results,
                user: req.currentUser,
            })
        },

        function(err) {
            res.redirect('/users/login');
        }
    );

});

router.get('/y', function(req, res, next) {

    var Todo = AV.Object.extend('y');

    let id = req.query.id;
    res.locals.id = id;


    // console.log(id, '123');
    // console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('htlist/y.html', {
                title: '产品名称',
                lists: results,
                user: req.currentUser,
            })
        },

        function(err) {
            res.redirect('/users/login');
        }
    );

});


router.get('/gate', function(req, res, next) {

    var Todo = AV.Object.extend('Gate');

    let id = req.query.id;
    res.locals.id = id;


    // console.log(id, '123');
    // console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('htlist/gate.html', {
                title: '产品名称',
                lists: results,
                user: req.currentUser,

            })
        },

        function(err) {
            // res.redirect('/users/login');
        }
    );



});





router.post('/gate', function(req, res, next) {


    var objectId = req.body.objectId

    console.log(objectId, 'sqk')



    var name = req.body.name;


    console.log(name);


    // var todo = new Todo();
    var todo = AV.Object.createWithoutData('Gate', objectId);

    todo.set('name', name);
    // todo.set('dizhi', dizhi);
    // todo.set('cash', Number(cash));
    // todo.set('duihuan', Number(duihuan));
    // todo.set('time', time);
    // todo.save('date1',time1)
    todo.save().then(function(results) {
        res.redirect('/ht/gate');
    }).catch(next);



});


router.post('/ball', function(req, res, next) {


    var objectId = req.body.objectId

    console.log(objectId, 'sqk')



    var name = req.body.name;


    console.log(name);


    // var todo = new Todo();
    var todo = AV.Object.createWithoutData('Ball', objectId);

    todo.set('name', name);
    // todo.set('dizhi', dizhi);
    // todo.set('cash', Number(cash));
    // todo.set('duihuan', Number(duihuan));
    // todo.set('time', time);
    // todo.save('date1',time1)
    todo.save().then(function(results) {
        res.redirect('/ht/ball');
    }).catch(next);



});

router.post('/check', function(req, res, next) {


    var objectId = req.body.objectId

    console.log(objectId, 'sqk')



    var name = req.body.name;


    console.log(name);


    // var todo = new Todo();
    var todo = AV.Object.createWithoutData('Check', objectId);

    todo.set('name', name);
    // todo.set('dizhi', dizhi);
    // todo.set('cash', Number(cash));
    // todo.set('duihuan', Number(duihuan));
    // todo.set('time', time);
    // todo.save('date1',time1)
    todo.save().then(function(results) {
        res.redirect('/ht/check');
    }).catch(next);



});

router.post('/globe', function(req, res, next) {


    var objectId = req.body.objectId

    console.log(objectId, 'sqk')



    var name = req.body.name;


    console.log(name);


    // var todo = new Todo();
    var todo = AV.Object.createWithoutData('Globe', objectId);

    todo.set('name', name);
    // todo.set('dizhi', dizhi);
    // todo.set('cash', Number(cash));
    // todo.set('duihuan', Number(duihuan));
    // todo.set('time', time);
    // todo.save('date1',time1)
    todo.save().then(function(results) {
        res.redirect('/ht/globe');
    }).catch(next);



});



router.post('/y', function(req, res, next) {


    var objectId = req.body.objectId

    console.log(objectId, 'sqk')



    var name = req.body.name;


    console.log(name);


    // var todo = new Todo();
    var todo = AV.Object.createWithoutData('y', objectId);

    todo.set('name', name);
    // todo.set('dizhi', dizhi);
    // todo.set('cash', Number(cash));
    // todo.set('duihuan', Number(duihuan));
    // todo.set('time', time);
    // todo.save('date1',time1)
    todo.save().then(function(results) {
        res.redirect('/ht/y');
    }).catch(next);



});




router.post('/htlist', function(req, res, next) {


    var objectId = req.body.objectId

    console.log(objectId, 'sqk')



    var name = req.body.name;


    console.log(name);


    // var todo = new Todo();
    var todo = AV.Object.createWithoutData('Butterfly', objectId);

    todo.set('name', name);
    // todo.set('dizhi', dizhi);
    // todo.set('cash', Number(cash));
    // todo.set('duihuan', Number(duihuan));
    // todo.set('time', time);
    // todo.save('date1',time1)
    todo.save().then(function(results) {
        res.redirect('/ht/ht');
    }).catch(next);
    // var fs = require('fs');


    // var form = new multiparty.Form();
    // form.parse(req, function(err, fields, files) {

    //     var Todo = AV.Object.extend('Butterfly');

    //     // console.log(fields, 'sqk1')

    //     var query = new AV.Query(Todo);

    //     // var iconFile = files.iconImage[0];

    //     var iconFile = files.iconImage[0];

    //     // var iconFile = files.iconImage1[0];


    //     // var iconFile = files.iconImage[0];

    //     if (iconFile.size !== 0) {
    //         fs.readFile(iconFile.path, function(err, data) {
    //             if (err) {
    //                 return res.send('读取文件失败');
    //             }
    //             var theFile = new AV.File(iconFile.originalFilename, data);

    //             console.log(theFile,'the')

    //             theFile.save().then(function(theFile) {
    //                 res.redirect('/ht/ht')

    //                 // console.log(theFile.url(), '123');


    //                 var status = req.query.status;

    //                 query.descending('createdAt');

    //                 var name = fields.name[0];

    //                 query.get(fields.objectId).then(function(results) {

    //                     // console.log(results.attributes.name, 'rrr')


    //                     var todo = AV.Object.createWithoutData('Butterfly', results.id);

    //                     // var name = fields.name;
    //                     todo.set('image', theFile.url());

    //                     todo.set('name', name);

    //                     todo.save();
    //                     res.redirect('/ht/ht')

    //                 });

    //             }).catch(console.error);
    //         });
    //     } else {

    //         var Todo = AV.Object.extend('Butterfly');

    //         console.log(fields, 'sqk1')

    //         var query = new AV.Query(Todo);

    //         var status = req.query.status;

    //         query.descending('createdAt');

    //         var name = fields.name[0];

    //         query.get(fields.objectId).then(function(results) {

    //             console.log(results.attributes.name, 'rrr')



    //             var todo = AV.Object.createWithoutData('Butterfly', results.id);

    //             // var name = fields.name;
    //             todo.set('name', name);

    //             todo.save();
    //             res.redirect('/ht/ht')
    //         });

    //     }

    // });


    // var form1 = new multiparty.Form();

    // form1.parse(req, function(err, fields, files) {

    //     var Todo1 = AV.Object.extend('Gate');

    //     console.log(fields, 'sqk1')

    //     var query1 = new AV.Query(Todo1);

    //     var iconFile1 = files.iconImage[0];
    //     if (iconFile1.size !== 0) {
    //         fs.readFile(iconFile1.path, function(err, data) {
    //             if (err) {
    //                 return res.send('读取文件失败');
    //             }
    //             var theFile1 = new AV.File(iconFile1.originalFilename, data);
    //             // var todo = new Todo();


    //             theFile1.save().then(function(theFile) {
    //                 res.redirect('/ht/gate')

    //                 console.log(theFile1.url(), '123');


    //                 var status = req.query.status;

    //                 query1.descending('createdAt');

    //                 var name1 = fields.name[0];

    //                 query1.get(fields.objectId).then(function(results) {

    //                     console.log(results.attributes.name, 'rrr')


    //                     var todo1 = AV.Object.createWithoutData('Gate', results.id);

    //                     todo1.set('image', theFile1.url());

    //                     todo1.set('name', name1);

    //                     todo1.save();
    //                     res.redirect('/ht/gate')

    //                 });

    //             }).catch(console.error);
    //         });
    //     } else {
    //         // res.send('请选择一个文件。');

    //         var Todo1 = AV.Object.extend('Gate');

    //         console.log(fields, 'sqk1')

    //         var query1 = new AV.Query(Todo1);

    //         var iconFile1 = files.iconImage[0];

    //         var status = req.query.status;

    //         query1.descending('createdAt');

    //         var name1 = fields.name[0];

    //         query1.get(fields.objectId).then(function(results) {

    //             console.log(results.attributes.name, 'rrr')


    //             var todo1 = AV.Object.createWithoutData('Gate', results.id);

    //             // todo1.set('image', theFile1.url());

    //             todo1.set('name', name1);

    //             todo1.save();
    //             res.redirect('/ht/gate')
    //         });
    //     }




    // });


});

module.exports = router;