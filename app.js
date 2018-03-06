const url = require('url');
const fs = require('fs');

function renderHTML(path, response){
    fs.readFile(path, null, function(error,data){
        if (error){
            res.writeHead(404)
        } else {
        res.write(data);
        }
        res.end();
    });
}


module.exports = {
    handleRequest : function(request, response){
        response.writeHead(200,{'Content-Type':'text/html'});

        var path = url.parse(request.url).pathname;

        switch (path) {
            case '/': 
            renderHTML('./index.html', response);
            break;
            case '/user':
            renderHTML('./user.html', response);
            break;
            default:
            response.writeHead(404);
            response.write('route not defined');
            response.end();
        }
    }
}