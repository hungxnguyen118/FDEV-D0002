var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', (req, res, next) => {
    let data_string = fs.readFileSync('./data_log/2020_12_23.log');
    let array_log = data_string.toString().split('\n');
    //console.log(array_log);

    array_log.forEach((item_log) => {
        let array_item = item_log.split('-');
        //console.log(array_item[2]);
        if(array_item[2] == 500){
            //console.log(decodeURIComponent(array_item[1]).match(/['"]|(<script>)/ig));
            if(decodeURIComponent(array_item[1]).match(/['"]|(<script>)/ig)){
                //console.log(decodeURIComponent(array_item[1]));
                console.log(item_log);
            }
        }
    });
    
    res.send(array_log.length.toString());
})

module.exports = router;
