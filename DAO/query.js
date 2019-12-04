let request = require('request-promise');
let queryUrl = 'https://web-api.juejin.im/query';
let fs = require('fs');
let path = require('path');
let data = { 
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

// axios.post(queryUrl, {
//     headers: {
//         'X-Agent': 'Juejin/Web'
//     }
// }, JSON.stringify(data)).then((req) => {
//     console.log(req.data)
// })
// console.log(JSON.stringify(data))
request({
    url: queryUrl,
    method: "POST",
    json: true,
    headers: {
        // "content-type": "application/json",
        'X-Agent': 'Juejin/Web'
    },
    body: data
}, function(error, response, body) {
    // console.log(error)
    console.log(body.data.articleFeed);
    fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(body.data.articleFeed ))
    // if (!error && response.statusCode == 200) {
    //     console.log(body) // 请求成功的处理逻辑
    // }
}); 
