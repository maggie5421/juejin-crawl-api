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
    let $ = await request(options);
    let articles = [];
    let items = $('.item .title');
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let $this = $(item);
        let href = $this.attr('href').trim();
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
                    tagNames
                });
                debug(`读取到文章: ${title}`)
            } catch (e) {

            }
        }
    }
    return articles;
}
let article = async function (id, url) {
    debug('开始读取文章内容');
    let options = {
        url,
        transform: (body) => {
            return cheerio.load(body);
        }
    }
    let $ = await request(options);
    let article = $('.main-container');
    let title = article.find('h1.article-title').text().trim();
    let content = article.find('.article-content').html();
    let tags = article.find('.tag-title');
    let tagNames = [];
    tags.each(function (index, item) {
        let $this = $(item);
        let name = $this.text();
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