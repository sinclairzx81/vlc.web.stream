

//---------------------------------------------------------------
// WEB SERVER:
//---------------------------------------------------------------

var server = require('http').createServer(function(request, response) {

    response.writeHead(200, {'Content-Type' : 'text/html'})

    response.end(require('fs').readFileSync('./index.html', 'utf8'))

}).listen(5001)

//---------------------------------------------------------------
// HTTP-PROXY
//---------------------------------------------------------------

var proxy = require('http-proxy')

var options = {

      router: {

	    'localhost/stream': '127.0.0.1:5002', // video stream

        'localhost'       : '127.0.0.1:5001'  // http server

      }
}

proxy.createServer(options).listen(5000) // listen on 5000

//---------------------------------------------------------------
// MESSAGES
//---------------------------------------------------------------

console.log('HTTP SERVER listening on port 5001')

console.log('HTTP PROXY  routing to 5001 (HTTP SERVER)')

console.log('HTTP PROXY  routing to 5002 (VLC)')

console.log('HTTP PROXY  listening on port 5000')





