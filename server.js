const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
let previousMessage = '';

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
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

app.post('/pass-it-on', (req, res) => {
  const message = req.body.message;

  if (!message || message.trim() === '') {
    res.status(400).send();
  } else {
    const responseMessage = previousMessage === '' ? message : previousMessage;
    previousMessage = message;
    res.send(responseMessage);
  }
});
// 启动服务器
const port = 3000;
app.listen(port, () => {
  console.log(`服务器正在监听端口 ${port}`);
});
