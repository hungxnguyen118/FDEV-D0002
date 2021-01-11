var express = require('express');
var router = express.Router();
var authenticate = require('../middleware/auth');


const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'database_chat';

/* GET users listing. */
router.get('/', function(req, res, next) {

  MongoClient.connect(url, function(err, client) {
    if(err)
        console.log(err);

    const db = client.db(dbName);

    const collection_user = db.collection('chat_message');

    collection_user.find({

    }).toArray(function(err, ds_message) {
        if(err)
            console.log(err);

        //console.log(ds_movie);

        res.json({'xu_ly': 'danh sach toàn bộ message', 'data_send': ds_message});
        
        client.close();
    });
  });

  // res.json({
  //   "data": "danh sach user" + JSON.stringify(req.query)
  // });

  //res.send('respond with a resource' + a);
});



module.exports = router;
