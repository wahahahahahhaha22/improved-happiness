const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/72d09c65fc834311a8137af262e6dd45.jpeg') {
    fs.readFile('72d09c65fc834311a8137af262e6dd45.jpeg', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('页面不存在');
    res.end();
  }
});

server.listen(80);
console.log('服务器正在运行中...');
