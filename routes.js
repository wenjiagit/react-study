/*
 * 路由映射文件,配置越靠前，优先级越高
 * */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('comment.html');
});
router.get('/comment.json', function (req, res, next) {
    res.send([
        {id: 1, author: "小刘", text: "嘎哈呢"},
        {id: 2, author: "大柱子", text: "你瞅啥？"},
        {id: 3, author: "二狗子", text: "瞅你咋地！"}
    ]);
});
module.exports = router;
