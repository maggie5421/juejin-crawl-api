const request = require('request-promise');
const queryUrl = 'https://web-api.juejin.im/query';
const write = require('./write');
const data = {
    "operationName": "",
    "query": "",
    "variables": {
        "first": 20,
        "after": "",
        "order": "POPULAR"
    },
    "extensions": {
        "query": {
            "id": "21207e9ddb1de777adeaca7a2fb38030"
        }
    }
};

async function getQuery(url) {
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            // "content-type": "application/json",
            'X-Agent': 'Juejin/Web'
        },
        body: data
    }, async function (error, response, body) {
        // console.log(error)
        const responseBody = body.data.articleFeed;
        const resdData = body.data.articleFeed.items.edges.map((item) => {
            item.node.tagNames = item.node.tags.map(i => i.title)
            item.node.href = item.node.originalUrl;
            return item.node
        });
        write.articles(resdData);
        if (responseBody.items.pageInfo && responseBody.items.pageInfo.hasNextPage) {
            data.variables.after = responseBody.items.pageInfo.endCursor
            getQuery(queryUrl)
        }

    });

}


getQuery(queryUrl)