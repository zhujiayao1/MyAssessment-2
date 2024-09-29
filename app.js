//导入express框架
const express = require("express");
//创建web服务器
const app = express();
const path = require("path");
const session = require("express-session");

app.use(
  session({
    secret: "zhujiayao",
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, //有效时间一天
    },
  })
);
app.use(express.static(path.join(__dirname, "./public")));

//导入路由
const admin = require("./router/admin");
app.use("/admin", admin);

//启用监听
app.listen(666, () => {
  console.log("http://localhost:666/index.html");
});
