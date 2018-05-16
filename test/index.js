const request = require('supertest')
const assert = require('assert')
const salakRedis = require('..')
const app = require('./fixture/index')

describe('Test salak-redis', () => {
  beforeAll(async () => {
    await new Promise((resolve, reject) => {
      app.on('ready', () => {
        app.redis.set('salak-redis', 'test', () => {
          resolve(true)
        })
      })
    })
  })

  // 清理数据
  afterAll(async () => {
    await app.redis.del('salak-redis')
    await app.redis.quit()
  })

  describe('exports redis', () => {
    it('should expose function', () => {
      assert.equal(typeof salakRedis, 'function')
      assert(salakRedis.redis)
    })
  })

  describe('context load redis', () => {
    it('should get redis data', (done) => {
      request.agent(app.callback())
        .get('/test')
        .expect(200, (err, res) => {
          if (err) {
            done(err)
            return
          }

          assert.deepEqual({ code: 0, msg: 'ok', data: { test: 'test' } }, JSON.parse(res.text))
          done()
        })
    })
  })
})
