// 建立 express Server
var express=require('express');
var app=express();

// 建立跨伺服器協定 cors
var cors=require('cors');
app.use(cors());

// 使用阜號 8000
app.listen(8000);

// 靜態檔案設置在public
app.use(express.static('public'));

// 識別 JSON 格式
app.use(express.json());
app.use( express.urlencoded( {extended: true}) );

// 建立並連結 "database" 資料庫
var mysql = require("mysql");

var conn = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "database"
});

// 判斷連線有無成功
conn.connect(function (err) {
    if(err){
        console.log(err);
    }else{
    console.log("你已成功連結")
    }
})

// 確認資料是否有成功撈出
app.get('/test',function(req,res){
    conn.query('select * from favtable',function(err,rows){
        res.send(JSON.stringify(rows))
    })
})