let debug = require('debug')('crawl:read:tags');
let cheerio = require('cheerio');
let request = require('request-promise');
let articles = async function (url, tagName) {
    debug(`开始读取${tagName}标签下面的文章列表`);
    let options = {
        url,
        transform: (body) => {
            return cheerio.load(body);
        }
    }
    const $ = await request(options);
    const articles = [];
    const items = $('.item .title');
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const $this = $(item);
        let href = $this.attr('href').trim();
        const likeCount = Number($($this.parents('.item')).find('.like .count').eq(0).text()) || 0;
        const commentsCount = Number($($this.parents('.item')).find('.comment .count').eq(0).text()) || 0;
        const user = {
            id: $($this.parents('.item')).find('.user-popover-box').attr('st:state'),
            name: $($this.parents('.item')).find('.user-popover-box').text()
        }
        const createdAt = "";
        if (!href.startsWith('/entry')) {
            try {
                let title = $this.text().trim();
                // console.log('href===', href)
                let id = href.match(/\/(\w+)$/) ? href.match(/\/(\w+)$/)[1] : '';
                if (!id) continue;
                href = `https://juejin.im` + href;
                let { content, tagNames } = await article(id, href);
                articles.push({
                    id,
                    title,
                    href,
                    content,
                    tagNames,
                    likeCount,
                    commentsCount,
                    user,
                });
                debug(`读取到文章: ${title}`);
            } catch (e){
                console.log(e, $this.text().trim());
            }
        }
    }
    return articles;
}
let article = async function (id, url) {
    debug('开始读取文章内容');
    const options = {
        url,
        transform: (body) => {
            return cheerio.load(body);
        }
    }
    const $ = await request(options);
    const article = $('.main-container');
    const title = article.find('h1.article-title').text().trim();
    const content = article.find('.article-content').html();
    const tags = article.find('.tag-title');
    let tagNames = [];
    tags.each(function (index, item) {
        const $this = $(item);
        const name = $this.text();
        tagNames.push(name);
    });
    return {
        id,
        title,
        content,
        tagNames
    }
}


exports.articles = articles;
exports.article = article;