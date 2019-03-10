const bodyParser = require('body-parser')

const weaponsRouter = require('./weapons')
const countriesRouter = require('./countries')

const router = require('express').Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.use('/weapons', weaponsRouter)
router.use('/countries', countriesRouter)

module.exports = router
