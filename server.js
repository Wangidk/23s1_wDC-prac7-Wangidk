const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

// Configure session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// POST route for /tcaccept
app.post('/tcaccept', (req, res) => {
  req.session.accepted = true; // Set session flag to true
  res.send('It works');
});

// GET route for /users/accepted
app.get('/users/accepted', (req, res) => {
  if (req.session.accepted) {
    res.send('It works');
  } else {
    res.sendStatus(403);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
