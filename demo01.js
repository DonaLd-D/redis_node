var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.on('connect', function () {
    // set 语法
    client.set('name', 'long', function (err, data) {
        console.log(data)
    })
   // get 语法
    client.get('name', function (err, data) {
        console.log(data)
    })

    client.lpush('class',1,function (err,data) {
        console.log(data)
    })

    client.lrange('class',0,-1,function (err,data) {
        console.log(data)
    })
})

client.quit();
