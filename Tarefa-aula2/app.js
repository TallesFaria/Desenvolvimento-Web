var http = require('http');
var port = process.env.port || 1337;
http.createServer(function(req, res){
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('Hello worldahahhah \n');
}).listen(port);
