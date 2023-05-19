const express = require('express');
const app = express();

app.get('/brew', (req, res) => {
  const drink = req.query.drink;

  if (drink === 'tea') {
    res.send('A delicious cup of tea!');
  } else if (drink === 'coffee') {
    res.status(418).send();
  } else {
    res.status(400).send();
  }
});

// 启动服务器监听在指定的端口上
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
