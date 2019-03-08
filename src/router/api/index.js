const countriesRouter = require('./countries')
const weaponsRouter = require('./weapons')

const router = require('express').Router()

router.use('/countries', countriesRouter)
router.use('/weapons', weaponsRouter)

module.exports = router
