const express = require('express');
const app = express();

let requestCount = 0;

// Custom middleware to count requests
app.use((req, res, next) => {
  requestCount++;
  console.log(`Received ${requestCount} requests`);
  next();
});

// Define your routes and other middleware here

// Example GET route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
