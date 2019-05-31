const server = require('./server.js');

const port = 9393;

server.listen(port, () => {
  console.log('Port 9393 is now active.');
})