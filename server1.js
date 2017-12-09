var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    response.end("You are talented!! Path URL: " + request.url);
}

function handleRequest2(request, response) {
    response.end("You are not very talented!! Path URL: " + request.url);
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT1, function() {
    console.log("Server listening on: http://localhost:" + PORT1);
})

server.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:" + PORT2);
})