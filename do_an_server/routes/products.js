const { query } = require('express');
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

        var query_limit = req.query.limit;

        if(query_limit){
            query_limit = ' LIMIT ' + query_limit;
        }
        else {
            query_limit = ''
        }
       
        // Use the connection
        connection.query('SELECT * FROM san_pham ORDER BY so_lan_xem DESC' + query_limit, function (error, results, fields) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          res.json(results);
        });
    });

    
});


module.exports = router;
