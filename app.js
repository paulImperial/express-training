const url = require('url');

module.exports = {
    handleRequest : function(request, response){
        response.writeHead(200,{'Content-Type':'txt/html'});

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