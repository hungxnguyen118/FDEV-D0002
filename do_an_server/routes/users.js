var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // var a = 10 + 1;
  // var data = {
  //   data: "data"
  // };
  // res.json(data);

  res.json({
    "data": "danh sach user" + JSON.stringify(req.query)
  });

  //res.send('respond with a resource' + a);
});

router.post('/', (req, res) => {
  res.json({'xu_ly': 'import nhieu user 1 lúc'});
}); // insert

router.put('/', (req, res) => {
  res.json({'xu_ly': 'update nhieu user 1 lúc'});
}); // create or update

router.delete('/', (req, res) => {
  res.json({'xu_ly': 'delete nhieu user 1 lúc'});
}); // delete

// router.all(); // thich cai nao chay cai do
// router.patch(); //move
// router.head(); // send before to get token
// router.options(); // check server
// router.purge(); // re-check server

module.exports = router;
