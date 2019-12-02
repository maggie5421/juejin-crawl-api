// let tagsUrl = 'https://juejin.im/subscribe/all';
let subscribeApi = require('./DAO/subscribe');
(async function () {
    await subscribeApi()
})()