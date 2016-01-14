var http = require('http');
var url = require('url');
var process = require('child_process');

http.createServer(function handler(req, res) {
    var q = url.parse(req.url, true);
    var max = q.query.max;
    if (! max) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Argument 'max' not found!");
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        var count = process.fork('count-primes', [max], {silent:true});
        count.stdout.on('data', function(data) {
            res.end(data.toString().trim() + " primes found between 0 and " + max);
        });
    }
}).listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/');
console.log('Example 1: http://127.0.0.1:8080');
console.log('Example 2: http://127.0.0.1:8080?max=100');
console.log('Example 3: http://127.0.0.1:8080?max=10000');
console.log('Example 4: http://127.0.0.1:8080?max=1000000');
