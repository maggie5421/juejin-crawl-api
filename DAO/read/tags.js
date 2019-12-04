let debug = require('debug')('crawl:read:tags');
let cheerio = require('cheerio');
let request = require('request-promise');


let tags = async function (url) {
    debug('开始读取所有的标签列表');
    let options = {
        url,
        transform: (body) => {
            return cheerio.load(body);
        }
    }
    let $ = await request(options);
    let tags = [];
    $('.item').each(function () {
        let $this = $(this);
        // 找到了图片所有的div
        let image = $this.find('div.thumb').first();
        if (!image) { return ;}
        let imageUrl = image.data('src');
        let indexOfSep = imageUrl.indexOf('?');
        if (indexOfSep != -1) {
            imageUrl = imageUrl.slice(0, indexOfSep);
        }
        let title = $this.find('.title').first();
        let name = title.text().trim();
        let subscribe = $this.find('.subscribe').first();
        let article = $this.find('.article').first();
        tags.push({
            image: imageUrl,
            name,
            url: `https://juejin.im/tag/${encodeURIComponent(name)}`,
            subscribe: Number(subscribe.text().match(/(\d+)/)[1]),
            article: Number(article.text().match(/(\d+)/)[1])
        });
        debug(`读取到一个新的标签：${name}`)
    });
    return tags;
} 

exports.tags = tags;