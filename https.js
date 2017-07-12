var app = require("express")();
var bodyParser = require("body-parser");

app.use(bodyParser.json())//use专门使用中间件的方法
app.use(bodyParser.ulencoded({
	extended: true
}))

app.post("/api/login",function(req,res){
	console.log(req.body)
	res.json({
		code:0,
		msg:"登录成功"
	})
})

app.listen(8090,function(){
	console.log("老司机车子发动啦！赶紧上车上车")
})