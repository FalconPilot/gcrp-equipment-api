const weaponsRouter = require('./weapons')
const countriesRouter = require('./countries')

const router = require('express').Router()

router.use('/weapons', weaponsRouter)
router.use('/countries', countriesRouter)

module.exports = router
