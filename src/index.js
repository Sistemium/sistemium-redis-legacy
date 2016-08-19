import redis from 'redis';
import bluebird from 'bluebird';
bluebird.promisifyAll(redis);

var redisClient;

function setup (config) {
  redisClient = redis.createClient(config);
}

function hgetJson (name, key) {
  return redisClient.hgetAsync(name, key)
    .then(result => JSON.parse(result));
}

function hsetJson (name, id, data) {
  return redisClient.hsetAsync(name, id, JSON.stringify(data));
}


export default {setup, hgetJson, hsetJson};
