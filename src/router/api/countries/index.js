const router = require('express').Router()

const { countries } = require(`${__dirname}/../../../database/models`)

// Return all countries
router.get('/',
  (req, res) => {
    countries.findAll()
      .then(x => {
        console.log(x)
      })
      .catch(console.error)
    res.status(200).json(req.countries)
  }
)

// Return all country data
router.get('/:country',
  (req, res) => {
    res.status(200).json(req.params)
  }
)

// Create a country
router.post('/',
  (req, res) => {
    countries.create(req.body)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        const msg = err.errors.map(err => err.message)
        res.status(400).json(msg)
      })
  }
)

// Update a country
router.post('/:id',
  (req, res) => {

  }
)

module.exports = router
