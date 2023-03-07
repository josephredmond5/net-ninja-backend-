 /* This code creates a server that logs a message to the console every time a request is made to port 3000 of the local host.*/

const http = require('http');

const server = http.createServer((req, res) => {
console.log('request made');
});

server.listen(3000, 'localhost', () => {
    console. log('listening for requests on port 3000');
})

