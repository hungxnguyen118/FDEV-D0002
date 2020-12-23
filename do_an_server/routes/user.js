var express = require('express');
var router = express.Router();
var fs = require('fs');

var authenticate = (req, res, next) => {
    var authorization = req.header('Authorization');
    var array_auth = authorization.split(' ');

    //console.log(array_auth[1]);
    var string_basic_auth = array_auth[1];
    var data_string_auth = (new Buffer(string_basic_auth, 'base64')).toString();
    // console.log(data_string_auth);

    var user_info = data_string_auth.split(':');
    if(user_info[0] == 'hungnguyen' && user_info[1] == '123456'){
        next();
    }
    else{
        res.status(401);
        res.json({
            'error': true,
            'error_message': 'You don\'t have permission'
        });
    }
}

router.get('/', (req, res) => {
    res.json({'xu_ly': 'thông tin user'});
});

router.get('/:id_user', (req, res) => {
    res.json({'xu_ly': 'thông tin user ' + req.params.id_user});
});

router.post('/', authenticate, (req, res) => {
    console.log(hahaha.length);
    res.json({
        'xu_ly': 'thêm user mới',
        data_send: req.body
    });
});

router.post('/sign-up', (req, res) => {
    res.json({
        'xu_ly': 'đăng ký user mới',
        data_send: req.body
    });
})

module.exports = router;