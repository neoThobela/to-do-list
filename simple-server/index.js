// // index.js
// const http = require('http');

// // Define the port to listen on
// const PORT = 3000;

// // Create the server
// const server = http.createServer((req, res) => {
//   // Set the response HTTP headers
//   res.setHeader('Content-Type', 'text/plain');

//   // Define a response based on the request URL
//   if (req.url === '/') {
//     res.statusCode = 200;
//     res.end('Welcome to the home page!');
//   } else if (req.url === '/about') {
//     res.statusCode = 200;
//     res.end('This is the about page.');
//   } else {
//     res.statusCode = 404;
//     res.end('404 - Page Not Found');
//   }
// });

// // Start the server
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });