var http = require('http');
var addModule = require('./adderModule');
var url =require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var urlVal = url.parse(req.url,true);
    var query = urlVal.query;
    if(urlVal.pathname=="/add.js"){ 
        addModule.add(req,res, query);
    }
    else{
        var fileName = "."+urlVal.pathname;
        fs.readFile(fileName, function(err, data){
            if(err){
                res.writeHead(404, {'Content-Type':'text/html'});
                res.end("404 Page not found")
            }
            res.writeHead(200);
            res.write(data);
            res.end();
        });

    }
}).listen(8080);