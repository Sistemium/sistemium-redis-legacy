import redis from 'redis';
import bluebird from 'bluebird';
bluebird.promisifyAll(redis);

export default function (config) {
  return redis.createClient(config);
}
