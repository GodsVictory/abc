const http = require('http');
const port = process.env.PORT || 3000;
const environment = process.env.ENVIRONMENT || "";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = `Hello Node!\nCurrent environment: ${environment}\nService B`
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
