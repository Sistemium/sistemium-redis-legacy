import redis from 'redis';
import Promise from 'bluebird';
Promise.promisifyAll(redis);

export default function () {
  return redis.createClient();
}
