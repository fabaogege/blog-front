//serverjs 文件
var server = require('express');
var app = server();

var cors = require("cors");// 这个比较重要，解决跨域问题.npm install cors 装一下

app.use(cors({

    origin: ['http://localhost:8080'], // 这是本地的默认地址和端口，vue启动的项目就是在这里，这样保证了等会我们在浏览器能访问服务器的数据（user.json）

    methods: ["GET", "POST"],

    alloweHeaders: ["Content-Type", "Authorization"]
}))

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
//跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/json', function (req, res) { //添加的代码
    let myjson = {
        name : '盒装牛奶',
        price : '3元',
        date : '2018年1月1日'
    }
    res.send(myjson);
})
//获取标签总数

app.get("/tag/getTags", function (req, res) { //"/user" 是自定义的，用于显示在地址栏
    var rtnCode = req.rtnCode;
    console.log("rtnCode:"+rtnCode);
    res.send(req);
});