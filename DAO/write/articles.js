const query = require('../../db');
const debug = require('debug')('crawl:write:article');
let articles = async function (articleList) {
    debug('写入文章列表');
    for (let article of articleList) {
        let oldArticles = await query(`SELECT * FROM articles WHERE id=? LIMIT 1`, [article.id]);
        if (Array.isArray(oldArticles) && oldArticles.length > 0) {
            let oldArticle = oldArticles[0];
            query(`UPDATE articles SET title=?,href=?,content=? WHERE id=?`, [article.title, article.href, article.content, oldArticle.id])
        } else{
            query(`INSERT INTO articles(id, title, href, content) VALUES(?,?,?,?)`, [article.id, article.title, article.href, article.content])
        }
        // 处理文章和标签的关系  一般简单处理 全部删除 再全部插入
        await query(`DELETE FROM article_tag WHERE article_id=?`, [article.id]);
        let where =  "'" + article.tagNames.join("','") +"'";
        console.log(where)
        const tagSQL = `SELECT id FROM tags WHERE name IN (${where})`;
        console.log(tagSQL)
        let tagIds = await query(tagSQL); 
        for (let row of tagIds) {
            await query(`INSERT INTO article_tag(article_id, tag_id) VALUES(?, ?)`, [article.id, row.id])
        }
        debug(`写入文章${article.title}列表成功`)
    }
}
module.exports = {
    articles
}