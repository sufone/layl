exports.offline = {
  responseStrategy: 'cache-first',
  autoUpdate: true,
  ServiceWorker: {
    events: true
  }
}