const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'application/json');
res.end('{ "mensaje": "Hola mundo como anda la people!!"}');
});
server.listen(port, hostname, () => {
console.log(`El servidor esta corriendo en: http://${hostname}:${port}/`);
});
