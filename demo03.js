var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.lpush('tasks', 'Paint the house red.', redis.print);

client.lpush('tasks', 'Paint the house green.', redis.print);

client.lrange('tasks', 0, -1, function(err, items) {
  if (err) throw err;
  items.forEach(function(item, i) {
    console.log(' ' + item);
  });
  client.quit();
});