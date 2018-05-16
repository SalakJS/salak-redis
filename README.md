# salak-redis

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![NPM download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/salak-redis.svg?style=flat-square
[npm-url]: https://npmjs.org/package/salak-redis
[travis-image]: https://img.shields.io/travis/SalakJS/salak-redis.svg?style=flat-square
[travis-url]: https://travis-ci.org/SalakJS/salak-redis
[david-image]: https://img.shields.io/david/SalakJS/salak-redis.svg?style=flat-square
[david-url]: https://david-dm.org/SalakJS/salak-redis
[download-image]: https://img.shields.io/npm/dm/salak-redis.svg?style=flat-square
[download-url]: https://npmjs.org/package/salak-redis

Redis for SalakJS.

## Install

```sh
$ npm install --save salak-redis
```

## Usage

### Config

In middleware:

```javascript
module.exports = {
  middleware: [
    {
      name: 'redis',
      package: require('salak-redis')
    }
  ],
  redis: {
    host: '127.0.0.1',
    port: 6379
  }
}
```

options: ref to [redis](https://github.com/NodeRedis/node_redis#options-object-properties)

### Use in Service or Controller

common/service/user.js

```javascript
const { Service } = require('salak')

class User extends Service {
  async findUserInfo (uid) {
    const info = await this.redis.getAsync(uid)
    return info
  }
}

module.exports = User
```
