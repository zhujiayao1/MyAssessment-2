const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crowdfunding_db'
});
// 连接数据库
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// 启动Express服务器
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
