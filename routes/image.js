'use strict';
var router = require('express').Router();
var AV = require('leanengine');
var fs = require('fs');
var multiparty = require('multiparty');
var mod = require('./ht.js');





router.get('/Gateimage', function(req, res, next) {

    var Todo = AV.Object.extend('Gate');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Gateimage.html', {
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
router.get('/Gateimage1', function(req, res, next) {

    var Todo = AV.Object.extend('Gate');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Gateimage1.html', {
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

router.get('/Gateimage2', function(req, res, next) {

    var Todo = AV.Object.extend('Gate');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Gateimage2.html', {
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

router.get('/Ballimage', function(req, res, next) {

    var Todo = AV.Object.extend('Ball');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Ballimage.html', {
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

router.get('/Ballimage1', function(req, res, next) {

    var Todo = AV.Object.extend('Ball');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Ballimage1.html', {
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
router.get('/Ballimage2', function(req, res, next) {

    var Todo = AV.Object.extend('Ball');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Ballimage2.html', {
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
router.get('/Butterfly', function(req, res, next) {

    var Todo = AV.Object.extend('Butterfly');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Butterfly.html', {
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
router.get('/Butterfly1', function(req, res, next) {

    var Todo = AV.Object.extend('Butterfly');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Butterfly1.html', {
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
router.get('/Butterfly2', function(req, res, next) {

    var Todo = AV.Object.extend('Butterfly');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Butterfly2.html', {
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

router.get('/Checkimage', function(req, res, next) {

    var Todo = AV.Object.extend('Check');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Checkimage.html', {
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

router.get('/Checkimage1', function(req, res, next) {

    var Todo = AV.Object.extend('Check');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Checkimage1.html', {
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
router.get('/Checkimage2', function(req, res, next) {

    var Todo = AV.Object.extend('Check');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Checkimage2.html', {
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

router.get('/Globeimage', function(req, res, next) {

    var Todo = AV.Object.extend('Globe');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Globeimage.html', {
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

router.get('/Globeimage1', function(req, res, next) {

    var Todo = AV.Object.extend('Globe');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Globeimage1.html', {
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

router.get('/Globeimage2', function(req, res, next) {

    var Todo = AV.Object.extend('Globe');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/Globeimage2.html', {
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

router.get('/yimage', function(req, res, next) {

    var Todo = AV.Object.extend('y');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/yimage.html', {
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

router.get('/yimage1', function(req, res, next) {

    var Todo = AV.Object.extend('y');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/yimage1.html', {
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

router.get('/yimage2', function(req, res, next) {

    var Todo = AV.Object.extend('y');

    let id = req.query.id;
    res.locals.id = id;


    console.log(id, '123');
    console.log(req, 'ttt')


    var query = new AV.Query(Todo);

    query.get(id).then(function(results) {

            res.render('image/yimage2.html', {
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
router.post('/Gateimage', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Gate');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/gate?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Gate', results.id);

                        // var name = fields.name;
                        todo.set('image', theFile.url());

                        todo.save();
                        res.redirect('/htlist/gate?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


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
    //                 res.redirect('/htlist/gate?id=' + fields.objectId)

    //                 console.log(theFile1.url(), '123');


    //                 var status = req.query.status;

    //                 query1.descending('createdAt');

    //                 var name1 = fields.name[0];

    //                 query1.get(fields.objectId).then(function(results) {

    //                     console.log(results.attributes.name, 'rrr')


    //                     var todo1 = AV.Object.createWithoutData('Gate', results.id);

    //                     todo1.set('image1', theFile1.url());

    //                     todo1.save();
    //                     res.redirect('/htlist/gate?id=' + fields.objectId)

    //                 });

    //             }).catch(console.error);
    //         });
    //     }




    // });


});
router.post('/Gateimage1', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Gate');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/gate?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Gate', results.id);

                        // var name = fields.name;
                        todo.set('image1', theFile.url());

                        todo.save();
                        res.redirect('/htlist/gate?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});
router.post('/Gateimage2', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Gate');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/gate?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Gate', results.id);

                        // var name = fields.name;
                        todo.set('image2', theFile.url());

                        todo.save();
                        res.redirect('/htlist/gate?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});

router.post('/Ballimage', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Ball');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/ball?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Ball', results.id);

                        // var name = fields.name;
                        todo.set('image', theFile.url());

                        todo.save();
                        res.redirect('/htlist/ball?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});

router.post('/Ballimage1', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Ball');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/ball?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Ball', results.id);

                        // var name = fields.name;
                        todo.set('image1', theFile.url());

                        todo.save();
                        res.redirect('/htlist/ball?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});

router.post('/Ballimage2', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Ball');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/ball?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Ball', results.id);

                        // var name = fields.name;
                        todo.set('image2', theFile.url());

                        todo.save();
                        res.redirect('/htlist/ball?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});

router.post('/Butterfly', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Butterfly');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/htlist?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Butterfly', results.id);

                        // var name = fields.name;
                        todo.set('image', theFile.url());

                        todo.save();
                        res.redirect('/htlist/htlist?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});
router.post('/Butterfly1', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Butterfly');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/htlist?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Butterfly', results.id);

                        // var name = fields.name;
                        todo.set('image1', theFile.url());

                        todo.save();
                        res.redirect('/htlist/htlist?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});
router.post('/Butterfly2', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Butterfly');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/htlist?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Butterfly2', results.id);

                        // var name = fields.name;
                        todo.set('image2', theFile.url());

                        todo.save();
                        res.redirect('/htlist/htlist?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});
router.post('/Checkimage', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Check');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/check?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Check', results.id);

                        // var name = fields.name;
                        todo.set('image', theFile.url());

                        todo.save();
                        res.redirect('/htlist/check?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});
router.post('/Checkimage1', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Check');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/check?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Check', results.id);

                        // var name = fields.name;
                        todo.set('image1', theFile.url());

                        todo.save();
                        res.redirect('/htlist/check?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});

router.post('/Checkimage2', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Check');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/check?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Check', results.id);

                        // var name = fields.name;
                        todo.set('image2', theFile.url());

                        todo.save();
                        res.redirect('/htlist/check?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});

router.post('/Globeimage', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Globe');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/globe?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Globe', results.id);

                        // var name = fields.name;
                        todo.set('image', theFile.url());

                        todo.save();
                        res.redirect('/htlist/globe?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});
router.post('/Globeimage1', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Globe');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/globe?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Globe', results.id);

                        // var name = fields.name;
                        todo.set('image1', theFile.url());

                        todo.save();
                        res.redirect('/htlist/globe?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});
router.post('/Globeimage2', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('Globe');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/globe?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('Globe', results.id);

                        // var name = fields.name;
                        todo.set('image2', theFile.url());

                        todo.save();
                        res.redirect('/htlist/globe?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});

router.post('/yimage', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('y');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/y?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('y', results.id);

                        // var name = fields.name;
                        todo.set('image', theFile.url());

                        todo.save();
                        res.redirect('/htlist/y?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});
router.post('/yimage1', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('y');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/y?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('y', results.id);

                        // var name = fields.name;
                        todo.set('image1', theFile.url());

                        todo.save();
                        res.redirect('/htlist/y?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});
router.post('/yimage2', function(req, res, next) {

    var fs = require('fs');

    var Todo = AV.Object.extend('y');

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {


        var query = new AV.Query(Todo);


        var iconFile = files.iconImage[0];

        if (iconFile.size !== 0) {
            fs.readFile(iconFile.path, function(err, data) {
                if (err) {
                    return res.send('读取文件失败');
                }
                var theFile = new AV.File(iconFile.originalFilename, data);

                console.log(theFile, 'the')

                theFile.save().then(function(theFile) {
                    res.redirect('/htlist/y?id=' + fields.objectId)


                    var status = req.query.status;

                    query.descending('createdAt');

                    // var name = fields.name[0];

                    query.get(fields.objectId).then(function(results) {

                        // console.log(results.attributes.name, 'rrr')

                        var todo = AV.Object.createWithoutData('y', results.id);

                        // var name = fields.name;
                        todo.set('image2', theFile.url());

                        todo.save();
                        res.redirect('/htlist/y?id=' + fields.objectId)

                    });

                }).catch(console.error);
            });
        }

    });


});

module.exports = router;