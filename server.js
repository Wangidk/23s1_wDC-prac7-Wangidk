const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// 将public文件夹作为静态文件目录
app.use(express.static('public'));
// 设置 body-parser 中间件来解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
// 添加这段代码作为路由处理函数
app.post('/pass-it-on', (req, res) => {
  const message = req.body.message;

  // 处理消息，将后缀添加到每一行后面
  const lines = message.split('\n');
  const modifiedLines = lines.map(line => line + req.body.suffix);
  const responseText = modifiedLines.join('\n');

  res.send(responseText);
});

// 启动服务器监听在指定的端口上
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
