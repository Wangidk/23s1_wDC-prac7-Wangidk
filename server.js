const express = require('express');
const app = express();
const path = require('path');

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
// 启动服务器
const port = 3000;
app.listen(port, () => {
  console.log(`服务器正在监听端口 ${port}`);
});
