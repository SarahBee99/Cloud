const http = require('http'); // Import the http module

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Welcome to the Home Page!');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Page not found!');
  }
});

const PORT = 3000; // Define the port number
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
