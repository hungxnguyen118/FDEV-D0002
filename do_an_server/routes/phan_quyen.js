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


router.put('/:id_quyen', function(req, res, next) {

    console.log(req.body, req.params);
    //res.json({});

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query(`SELECT * FROM menu_quan_tri`, function (error, results_menu_quyen, fields) {
            if (err) throw err; // not connected!

            //console.log(results_menu_quyen);
            var mang_update = results_menu_quyen.filter(menu_quyen => req.body.find(item_quyen_moi => item_quyen_moi.alias === menu_quyen.alias));

            connection.query(`DELETE FROM quyen_nguoi_dung_menu_quan_tri WHERE id_quyen_nguoi_dung = ?`, [req.params.id_quyen], function (error, result_delete, fields) {
                if (err) throw err; // not connected!

                for(let i = 0; i < mang_update.length; i++){
                    connection.query(`INSERT INTO quyen_nguoi_dung_menu_quan_tri(id_quyen_nguoi_dung, id_menu_quan_tri) VALUES(?, ?)`, [req.params.id_quyen, mang_update[i].id], function(error, result_insert, fields){
                        if (err) throw err; // not connected!

                        console.log(i);
                        if(i == mang_update.length - 1){
                            
                            res.json(
                                {
                                    error: false,
                                    message: "Set permission Complete"
                                }
                            );
                            connection.release();
                        }
                    })
                }
                
            });
            //res.json(mang_update);
        });

    });
    
});

module.exports = router;
