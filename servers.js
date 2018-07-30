var http = require("http");

var port1 = 7000;
var port2 = 7500;

function handleRequest1(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Something good!!" + request.url);
};

var server1 = http.createServer(handleRequest1);

server1.listen(port1, function() {
    console.log("Server listening on: http://localhost:" + port1);
});

function handleRequest2(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Something bad" + request.url);
}

var server2 = http.createServer(handleRequest2);

server2.listen(port2, function() {
    console.log("Server listening on: http://localhost:" + port2)
})