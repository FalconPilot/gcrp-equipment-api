const fs = require('fs-extra')

const appRouter = require('./app')
const apiRouter = require('./api')

const mainRouter = app => {

  // Plug routers
  app.use('/', appRouter)
  app.use('/api', apiRouter)
}

module.exports = mainRouter
