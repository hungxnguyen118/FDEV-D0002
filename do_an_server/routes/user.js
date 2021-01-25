var express = require('express');
var router = express.Router();
var fs = require('fs');
var authenticate = require('../middleware/auth');

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'database_chat';

router.get('/', (req, res) => {
    MongoClient.connect(url, function(err, client) {
        if(err)
            console.log(err);

        const db = client.db(dbName);

        const collection_user = db.collection('users');

        collection_user.find({}).toArray(function(err, ds_user) {
            if(err)
                console.log(err);

            //console.log(ds_user);

            res.json({'xu_ly': 'thông tin user', 'data': ds_user});
            
            client.close();
        });
    });
});

router.get('/:id_user', (req, res) => {

    MongoClient.connect(url, function(err, client) {
        if(err)
            console.log(err);
        const db = client.db(dbName);
        const collection_user = db.collection('users');
        //collection_user.findOne({'email': req.params.id_user},function(err, info_user) {
        collection_user.findOne({'_id': ObjectID(req.params.id_user)},function(err, info_user) {
            if(err)
                console.log(err);
            //console.log(ds_user);
            res.json({'xu_ly': 'thông tin user', 'data': info_user});
            client.close();
        });
    });
    //res.json({'xu_ly': 'thông tin user ' + req.params.id_user});
});

router.post('/', authenticate.auth, (req, res) => {
    //console.log(hahaha.length);
    res.json({
        'xu_ly': 'thêm user mới',
        data_send: req.body
    });
});

router.post('/sign-up', (req, res) => {
    MongoClient.connect(url, function(err, client) {
        if(err)
            console.log(err);
        const db = client.db(dbName);
        const collection_user = db.collection('users');
        collection_user.insertOne(req.body, () => {
            res.json({
                'xu_ly': 'đăng ký user mới',
                data_send: req.body
            });
        })
    });
});

router.put('/:id_user', (req, res) => {
    //console.log(req.params.email);
    MongoClient.connect(url, function(err, client) {
        if(err)
            console.log(err);
        const db = client.db(dbName);
        const collection_user = db.collection('users');
        delete req.body._id;
        //collection_user.updateOne({email: req.params.email}, { $set: req.body }, () => {
        collection_user.updateOne({_id: ObjectID(req.params.id_user)}, { $set: req.body }, () => {
            res.json({
                'xu_ly': 'update user ' + req.params.id_user + ' thành công',
                data_send: req.body
            });
        });
        
    });
});


//router.delete('/:email', authenticate.auth, (req, res) => {
router.delete('/:id_user', authenticate.auth, (req, res) => {
    console.log(req.params.email);
    MongoClient.connect(url, function(err, client) {
        if(err)
            console.log(err);
        const db = client.db(dbName);
        const collection_user = db.collection('users');
        collection_user.deleteOne({_id: ObjectID(req.params.id_user)}, () => {
            res.json({
                'xu_ly': 'delete user ' + req.params.email + ' thành công',
                data_send: req.body
            });
        });
        
    });
})


router.post('/log-in', (req, res) => {
    console.log(req.body);
    MongoClient.connect(url, function(err, client) {
        if(err)
            console.log(err);
        const db = client.db(dbName);
        const collection_user = db.collection('users');
        collection_user.findOne({tai_khoan: req.body.tai_khoan}, (err, result) => {
            if(err)
                console.log(err);

            if(typeof result != 'undefined' && result != null){
                if(result.mat_khau == req.body.mat_khau){
                    //res.status(401);
                    result.mat_khau = null;
                    res.json({
                        'xu_ly': 'đăng nhập thành công',
                        data_send: result
                    });
                }
                else{
                    res.status(401);
                    res.json({
                        'xu_ly': 'xử lý đăng nhập thất bại, sai tài khoản hoặc mật khẩu',
                        error: true
                    });
                }
            }
            else{
                res.status(401);
                res.json({
                    'xu_ly': 'xử lý đăng nhập thất bại, sai tài khoản hoặc mật khẩu',
                    error: true
                });
            }
        });
        
    });
})

module.exports = router;