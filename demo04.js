var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.sadd('ip', '192.168.3.7', redis.print);

client.sadd('ip', '192.168.3.7', redis.print);

client.sadd('ip', '192.168.3.9', redis.print);

client.smembers('ip', function(err, members) {
  if (err) throw err;
  console.log(members);
  client.quit();
});