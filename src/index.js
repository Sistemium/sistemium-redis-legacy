export default {
  setup,
  hgetJson,
  hsetJson,
  lpushJson,
  lrangeJson,
  ltrim
};

import redis from 'redis';
import bluebird from 'bluebird';
bluebird.promisifyAll(redis);

let redisClient;

function setup (config) {
  return (redisClient = redis.createClient(config));
}

function hgetJson (name, key) {
  return redisClient.hgetAsync(name, key)
    .then(result => JSON.parse(result));
}

function hsetJson (name, id, data) {
  return redisClient.hsetAsync(name, id, JSON.stringify(data));
}

function lpushJson (name, data) {
  return redisClient.lpushAsync(name, JSON.stringify(data));
}

function lrangeJson (name, start, stop) {
  return redisClient.lrangeAsync(name, start, stop)
    .then(result => {
      return result.map(item => JSON.parse(item));
    });
}

function ltrim(name, start, stop) {
  return redisClient.ltrimAsync(name, start, stop);
}
