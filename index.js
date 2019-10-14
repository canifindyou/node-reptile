var Koa = require("koa")
var koaRoute = require("koa-router") 
var router = require("./router/index.js")
var app = new Koa()
app.use(async (ctx, next) => { //允许跨域请求
    ctx.set("Access-Control-Allow-Origin", "*");
    next();
})
app.use(router.routes())
app.listen("3000", () => {
    console.log("服务器启动在3000端口")
})