var http =require('http');

var hostname = '127.0.0.1';
var port = process.env || 1337;

http.createServer(function(request, response){
  response.writeHead(200,{'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(port, hostname, function(){
   console.log('Server runnning at http://' + hostname + ':' + port + '/');
});
