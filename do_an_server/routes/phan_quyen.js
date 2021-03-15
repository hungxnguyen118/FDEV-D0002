var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'shop_ban_hang'
});

/* GET users listing. */
router.get('/', function(req, res, next) {

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query(`SELECT * FROM quyen_nguoi_dung`, function (error, results, fields) {
            if (err) throw err; // not connected!

            res.json(results);
        });

    });
    
});

// api lấy danh sách menu theo quyền
router.get('/:id_quyen', function(req, res, next) {

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query(`SELECT mq.* 
            FROM menu_quan_tri mq
            JOIN quyen_nguoi_dung_menu_quan_tri qnd
            ON mq.id = qnd.id_menu_quan_tri
            WHERE qnd.id_quyen_nguoi_dung = ?`, req.params.id_quyen, function (error, results, fields) {
            if (err) throw err; // not connected!

            res.json(results);
        });

    });
    
});

module.exports = router;
