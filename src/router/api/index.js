const weaponsRouter = require('./weapons')

const router = require('express').Router()

router.use('/weapons', weaponsRouter)

module.exports = router
