var http = require('http');


function in_gia_tri(res, chuoi_data){
    if(chuoi_data){
        console.log(JSON.parse(chuoi_data));
    }
    res.writeHeader(200, { 'Content-Type': 'application/json' })
    res.write('{"data": "hello world"}');
    res.end();
}

http.createServer((req, res) => {
    //console.log(req);
    var data = [];

    req.on('data', (chunk) => {
        data.push(chunk);
    })

    req.on('end', () => {
        if(req.url == '/'){
            if(req.method == 'GET'){
                in_gia_tri(res);
            }
            else if(req.method == "POST"){
                in_gia_tri(res, data.toString());
            }
        }
        else{

        }
    })

}).listen(4000);