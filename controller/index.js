let requestData = require("../nodeData/nodeData.js")
async function getMovieData(ctx) {
//    var arr = requestData("https://movie.douban.com/top250?start=25&filter=")
var arr = requestData
   ctx.body = {
       data:arr
   }
}

module.exports={
    getMovieData,
}