var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({'xu_ly': 'thông tin user'});
});

router.get('/:id_user', (req, res) => {
    res.json({'xu_ly': 'thông tin user ' + req.params.id_user});
});

router.post('/', (req, res) => {
    res.json({
        'xu_ly': 'thêm user mới',
        data_send: req.body
    });
});

module.exports = router;