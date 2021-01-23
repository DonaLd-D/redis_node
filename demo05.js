var redis = require('redis')
var clientA = redis.createClient(6379, '127.0.0.1')
var clientB = redis.createClient(6379, '127.0.0.1')

clientA.on('message', function(channel, message) {
  console.log('Client A got message from channel %s: %s', channel, message);
});
clientA.on('subscribe', function(channel, count) {
  clientB.publish('main_chat_room', 'Hello world!');
});
clientA.subscribe('main_chat_room');

