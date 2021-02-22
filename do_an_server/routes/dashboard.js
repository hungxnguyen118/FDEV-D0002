var express = require('express');
var router = express.Router();

var mysql = require('mysql');

/* GET home page. */
router.get('/get-last-month', function(req, res, next) {
    var last_month = (new Date()).getMonth();
    var cur_year = (new Date()).getFullYear();

    if(last_month == 0){
        last_month = 12;
        cur_year -= 1;
    }

    var number_of_day = new Date(cur_year, last_month, 0).getDate();

    var array_result = [];
    for(var i = 0; i < number_of_day; i++){
        array_result[i] = i+1;
    }

    res.json(array_result);
});

router.get('/data-last-month', function(req, res, next) {
    var last_month = (new Date()).getMonth();
    var cur_year = (new Date()).getFullYear();

    if(last_month == 0){
        last_month = 12;
        cur_year -= 1;
    }

    var number_of_day = new Date(cur_year, last_month, 0).getDate();

    var array_result = [];
    for(var i = 0; i < number_of_day; i++){
        array_result[i] = Math.ceil(Math.random() * 99);
    }

    res.json(array_result);
});

function random_color(){
    return 'rgba(' + Math.ceil(Math.random() * 254) + ',' + Math.ceil(Math.random() * 254) + ',' + Math.ceil(Math.random() * 254) + ')';
}

function random_skill_point(number_of_skill){
    var array_temp = [];

    for(var i = 0; i < number_of_skill; i++){
        array_temp[i] = Math.ceil(Math.random() * 9);
    }
    
    return array_temp;
}

router.get('/data-employee', function(req, res, next) {
    var number_employee = 10;

    var array_employee = [];

    for(var i = 0; i < number_employee; i++){
        var employee = {
            borderColor: random_color(),
            data: random_skill_point(6),
            label: 'Person ' + (i + 1)
        };

        array_employee[i] = employee;
    }

    res.json(array_employee);
});



function number_data_month(nam_thong_ke) {
    var array_temp = [];

    for(var i = 1; i <= 12; i++){
        array_temp[i] = nam_thong_ke + ' ' + ((i<10)?'0' + i:i);
    }

    array_temp.shift();
    return array_temp;
}


router.get('/don-hang-so-thang/:nam_thong_ke', function(req, res, next) {    
    res.json(number_data_month(req.params.nam_thong_ke));
});


router.get('/don-hang/:nam_thong_ke', function(req, res, next) {

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database: 'ban_sach_online_db'
    });

    connection.connect(function(err) {
        if (err) {
          console.log('error connecting: ' + err.stack);
          return;
        }
       
        console.log('connected as id ' + connection.threadId);

        connection.query(`SELECT DATE_FORMAT(ngay_dat, '%Y %m') as order_temp, SUM(tong_tien) as tong_tien_thong_ke
        FROM bs_don_hang
        GROUP BY DATE_FORMAT(ngay_dat, '%Y %m')`, function (error, results, fields) {

            connection.end(function(err) {
                // The connection is terminated now
                console.log('Close connection id ' + connection.threadId);
            });
              

            if (error) throw error;
            // connected!
            console.log(results);

            var list_month = number_data_month(req.params.nam_thong_ke);

            var reponse = [];

            for(var i = 0; i < list_month.length; i++){
                reponse[i] = 0;

                for(var j = 0; j < results.length; j++){

                    if(list_month[i] == results[j].order_temp){
                        reponse[i] = results[j].tong_tien_thong_ke;
                    }

                }
            }

            res.json(reponse);
        });
    });

    // res.json([req.params.nam_thong_ke]);
});


module.exports = router;
