const { Controller } = require('salak')

class Test extends Controller {
  async actionIndex () {
    const test = await this.redis.getAsync('salak-redis')

    this.sendJson(0, 'ok', {
      test
    })
  }
}

module.exports = Test
