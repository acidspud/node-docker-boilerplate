const http = require('http');

const portNumber = 9000;
// const configPaths = require('../config/paths');


const statusCodes = {
  success: 200
};

const server = http.createServer(function createServerFn (request, response) {
  // const path = url.parse(request.url).pathname;
  response.writeHead(statusCodes.success, {
    'Content-Type': 'text/html'
  });
  response.write('hello world');
  response.end();
});

server.listen(portNumber);
