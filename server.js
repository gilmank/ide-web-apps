//var http = require("http");
//var url = require("url");
//
//var static = require("node-static");
//
//function start(route, handle) {
//  function onRequest(request, response) {
//    var pathname = url.parse(request.url).pathname;
//      
//    console.log("Request for " + pathname + " received.");
//
//    route(handle, pathname, response);
//
//  }
//
//  http.createServer(onRequest).listen(8888);
//  console.log("Server has started.");
//}
//
//exports.start = start;
//

var static = require('node-static'),
http = require('http'),
util = require('util');

var webroot = './public',
port = 8888;
var file = new(static.Server)(webroot, {
                              cache: 600,
                              headers: { 'X-Powered-By': 'node-static' }
                              });
http.createServer(function(req, res) {
                  req.addListener('end', function() {
                                  file.serve(req, res, function(err, result) {
                                             if (err) {
                                             console.error('Error serving %s - %s', req.url, err.message);
                                             if (err.status === 404 || err.status === 500) {
                                             file.serveFile(util.format('/%d.html', err.status), err.status, {}, req, res);
                                             } else {
                                             res.writeHead(err.status, err.headers);
                                             res.end();
                                             }
                                             } else {
                                             console.log('%s - %s', req.url, res.message);
                                             }
                                             });
                                  });
                  }).listen(port);
console.log('node-static running at http://localhost:%d', port);