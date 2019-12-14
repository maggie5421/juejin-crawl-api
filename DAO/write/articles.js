const query = require('../../db');
const debug = require('debug')('crawl:write:article');
let articles = async function (articleList) {
    debug('写入文章列表');
    // console.log(articleList.length)
    for (let article of articleList) {
        const oldArticles = await query(`SELECT * FROM articles WHERE id=? LIMIT 1`, [article.id]);
        if (Array.isArray(oldArticles) && oldArticles.length > 0) {
            let oldArticle = oldArticles[0];
            // console.log(article.createdAt, article.category ? article.category.id : '')
             query(`UPDATE articles SET title=?, href=?, content=?, createdAt=?, likeCount=?, userId=?, commentsCount=?, categoryId=? WHERE id=?`,
                [article.title, article.href, article.content, article.createdAt, article.likeCount, article.user ? article.user.id : '', article.commentsCount, article.category ? article.category.id : '', oldArticle.id])
        } else {
            // console.log('insert:::', article.title,article.createdAt, article.likeCount)
             query(`INSERT INTO articles(id, title, href, content, createdAt, likeCount, userId, commentsCount, categoryId) VALUES(?,?,?,?,?,?,?,?,?)`,
                [article.id, article.title, article.href, article.content, article.createdAt, article.likeCount, article.user ? article.user.id : '', article.commentsCount, article.category ? article.category.id : ''])
        }

        const oldArticleTag = await query(`SELECT * FROM article_tag WHERE article_id=? LIMIT 1`, [article.id])
        // 处理文章和标签的关系  一般简单处理 全部删除 再全部插入

        oldArticleTag && await query(`DELETE FROM article_tag WHERE article_id=?`, [article.id]);

        let where =  "'" + article.tagNames.join("','") +"'";
        console.log(where)
        const tagSQL = `SELECT id FROM tags WHERE name IN (${where})`;
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