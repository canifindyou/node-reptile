// let url = require("../controller/index.js")
let request = require("request");
let cheerio = require("cheerio")
var arr = []
let url = "https://movie.douban.com/top250"
// request(url).pipe((fs.createWriteStream("1.html")))

   request(url, (err, res, body) => {
    var $ = cheerio.load(body)
    let lis = $(".grid_view").find('li')
     lis.each((index, ele) => {
        let pic = $(ele).find(".pic")
        let info = $(ele).find(".info")
        let result = {
            name: info.find(".hd").find("span").first().text(),
            picUrl: pic.find("img").attr("src"),
            num: pic.text().replace(/\s+/g, ""),
            dec: info.find(".bd").find("p.quote").text().replace(/\s+/g, ""),
            person: info.find(".bd").find("p").first().text().replace(/\s+/g, "")
        }
        // let resultJson = qs.stringify(result)
        arr.push(result)
    })
    console.log("函数已经执行")
})




module.exports=arr


