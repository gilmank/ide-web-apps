var exec = require("child_process").exec;

var fs = require("fs");

function start(response) {
	console.log("Request handler 'start' was called.");
    
    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.htm';
    
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }
    
    path.exists(filePath, function(exists) {
                
                if (exists) {
                fs.readFile(filePath, function(error, content) {
                            if (error) {
                            response.writeHead(500);
                            response.end();
                            }
                            else {
                            response.writeHead(200, { 'Content-Type': contentType });
                            response.end(content, 'utf-8');
                            }
                            });
                }
                else {
                response.writeHead(404);
                response.end();
                }
                });
}

            

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;

