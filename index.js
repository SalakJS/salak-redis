const redis = require('redis')
const Promise = require('bluebird')

Promise.promisifyAll(redis.RedisClient.prototype)
Promise.promisifyAll(redis.Multi.prototype)

module.exports = (options, app) => {
  let client = redis.createClient(options).on('error', (err) => {
    app.logger.error(err)
  })

  app.BaseContext.prototype.redis = client
  app.redis = client
}

module.exports.redis = redis
