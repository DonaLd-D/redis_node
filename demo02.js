var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.hmset('kitty', {
    'age': '2-year-old',
    'sex': 'male'
  }, redis.print);

client.hget('kitty', 'age', function(err, value) {
    if (err) throw err;
    console.log('kitty is ' + value);
});

client.hkeys('kitty', function(err, keys) {
    if (err) throw err;
    keys.forEach(function(key, i) {
        console.log(key, i);
    });
    client.quit();
});
