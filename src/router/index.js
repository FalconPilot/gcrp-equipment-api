const fs = require('fs-extra')

const appRouter = require('./app')
const apiRouter = require('./api')
const countriesRouter = require('./countries')

const mainRouter = app => {

  // Plug routers
  app.use('/', appRouter)
  app.use('/api', apiRouter)
  app.use('/countries', countriesRouter)
}

module.exports = mainRouter
