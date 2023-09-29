// Create web server
// Run: node comments.js
// Test: curl -d "user=John&comment=hello" http://localhost:8080
// Test: curl -d "user=John&comment=hello" http://localhost:8080/comments

var http = require('http');
var qs = require('querystring');

var comments = [];

var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        var body = '';
        req.on('data', function(data) {
            body += data;
        });
        req.on('end', function() {
            var obj = qs.parse(body);
            comments.push(obj);
            res.writeHead(200);
            res.end(JSON.stringify(comments));
        });
    } else {
        res.writeHead(200);
        res.end(JSON.stringify(comments));
    }
});

server.listen(8080);
console.log('Server is listening on port 8080');