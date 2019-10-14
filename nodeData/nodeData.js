// let url = require("../controller/index.js")
let request = require("request");
let cheerio = require("cheerio")
var arr = []
let url = "https://movie.douban.com/top250"
/* 
1.获取网页
2.分析网页结构
3.使用cheerio获取dom元素中的属性或值
4.将获取的数据封装成json数据，给前端使用
*/

   request(url, (err, res, body) => {
    var $ = cheerio.load(body) //解析获取的网页
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
   
})




module.exports=arr


