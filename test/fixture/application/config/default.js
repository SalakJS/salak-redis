module.exports = {
  logger: {
    defaultLevel: 'error'
  },
  middleware: [
    {
      name: 'redis',
      package: require('../../../..')
    }
  ],
  redis: {
    host: '127.0.0.1',
    port: 6379
  }
}
