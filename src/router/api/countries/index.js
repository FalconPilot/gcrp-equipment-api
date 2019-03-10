const router = require('express').Router()

// Return all countries
router.get('/',
  (req, res) => {
    res.status(200).json(req.countries)
  }
)

// Return all country data
router.get('/:country',
  (req, res) => {
    res.status(200).json(req.country)
  }
)

module.exports = router
