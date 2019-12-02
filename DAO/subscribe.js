let read = require('./read');
let write = require('./write');
let tagsUrl = 'https://juejin.im/subscribe/all';
let queryUrl = 'https://web-api.juejin.im/query';
module.exports =  function () {
    // 读取标签数据
    let tags = await read.tags(tagsUrl);
    // 向数据库中写入标签数据
    await write.tags(tags);
    let allAircles = {};
    for (let tag of tags) { 
        // 先获取每个标签下面的文章列表
        let articles = await read.articles(tag.url, tag.name);
        // 因为不同标签下面的文章可能有重复，所以要去重
        articles.forEach(item => allAircles[item.id] = item);
    }
    // 写入文章数据
    await write.articles(Object.values(allAircles));

    



    process.exit();
} 
