const http = require('http');
// const extend = require('node.extend');

const portNumber = 9000;
const contentType = 'application/json';
// const configPaths = require('../config/paths');
// let server = null;

const statusCodes = {
  success: 200
};

/* const exitCodes = {
  noError: 0,
  uncaughtException: -100
};
*/
require('http-shutdown').extend();
http.createServer(function createServerFn (request, response) {


  // const path = url.parse(request.url).pathname;
  response.writeHead(statusCodes.success, {
    'Content-Type': contentType
  });
  response.write('hello world');
  response.end();
})
.withShutdown()
.listen(portNumber, () => {
  console.log('Server started');
});


// Process to shutdown server gracefully for docker.stop command
/* process.on('SIGTERM', () => {
  if (!server) {
    console.log('App - Server not running shutting down');
    process.exit(exitCodes.noError); // eslint-disable-line no-process-exit
  }

  server.shutdown(() => {
    console.log('App - Server gracefully shutdown');
    process.exit(exitCodes.noError); // eslint-disable-line no-process-exit
  });
});
*/
// require('http-shutdown')(server);
// server.listen(portNumber);


/* server.shutdown(function shutdownServerFn () {
  console.log('Everything is cleanly shutdown.');
});
*/
