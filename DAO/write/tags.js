const query = require('../../db');
const debug = require('debug')('crawl:write:tags');
let tags = async function (tags) {
    debug('开始保存标签列表');
    for (let tag of tags) {
        let oldTags = await query(`SELECT * FROM tags WHERE name = ? LIMIT 1`, [tag.name]);
        // 如果数据库里面已经有记录了，则需要按老的记录ID来=列新数据
        if (Array.isArray(oldTags) && oldTags.length > 0) {
            await query(`UPDATE tags SET name=?,image=?, url=?,subscribe=?, articles=? WHERE id=?`, [tag.name, tag.image, tag.url, tag.subscribe, tag.article, oldTags[0].id])
        } else {
            await query(`INSERT INTO tags(name, image, url, subscribe, articles) VALUES(?,?,?,?,?)`, [tag.name, tag.image, tag.url, tag.subscribe, tag.article])
        }
        debug('成功保存标签列表');
    }

}

module.exports = {
    tags
}