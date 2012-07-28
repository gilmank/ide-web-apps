var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called.");

	var body = "<p>what what</p>";
	response.writeHead(200, {"Content-Type": "text/html"});        
	response.write(body);
	response.end();
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;

