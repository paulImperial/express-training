const http = require('http');
const fs = require('fs');

function onRequest( req,res ){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error,data){
        if (error){
            res.writeHead(404)
        } else {
        res.write(data);
        }
        res.end();
    });
};

http.createServer(onRequest).listen(8000);