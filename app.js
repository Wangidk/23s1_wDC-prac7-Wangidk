const express = require('express');
const app = express();

app.get('/brew', (req, res) => {
  const drink = req.query.drink;

  if (drink === 'tea') {
    res.send('A delicious cup of tea!');
  } else if (drink === 'coffee') {
    res.sendStatus(418);
  } else {
    res.sendStatus(400);
  }
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
