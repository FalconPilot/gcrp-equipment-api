const apiRouter = require('./api')

const appRouter = app => {
  app.use('/api', apiRouter)
}

module.exports = appRouter
