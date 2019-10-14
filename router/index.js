let Router = require("koa-router")
let getData = require("../controller/index.js")
var router = new Router()
router.get("/top250", getData.getMovieData)

module.exports = router