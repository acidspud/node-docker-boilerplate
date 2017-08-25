const http = require('http');
// const configPaths = require('../config/paths');
const settings = require('../config/settings');
const codes = require('../config/codes');

require('http-shutdown').extend();
http.createServer(function createServerFn (request, response) {

  // const path = url.parse(request.url).pathname;
  response.writeHead(codes.statusCodes.success, {
    'Content-Type': settings.http.contentType
  });
  response.write('hello world');
  response.end();
})
.withShutdown()
.listen(settings.http.portNumber, () => {
  console.log('Server started');
});


// Process to shutdown server gracefully for docker.stop command
process.on('SIGTERM', () => {
  if (!server) {
    console.log('App - Server not running shutting down');
    process.exit(codes.exitCodes.noError); // eslint-disable-line no-process-exit
  }

  server.shutdown(() => {
    console.log('App - Server gracefully shutdown');
    process.exit(codes.exitCodes.noError); // eslint-disable-line no-process-exit
  });
});
