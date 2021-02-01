var express = require('express');
var router = express.Router();

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


module.exports = router;
