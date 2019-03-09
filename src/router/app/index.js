const fs = require('fs-extra')
const mime = require('mime')

const router = require('express').Router()

// Return app front-end
router.get('/', (_req, res) => {
  fs.readFile(`${__dirname}/../../dist/index.html`, 'utf-8')
    .then(contents => {
      res.status(200).send(contents)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

// Return CSS/JS file
router.get('/:file', (req, res) => {
  const fileName = req.params.file
  fs.readFile(`${__dirname}/../../dist/${fileName}`, 'utf-8')
    .then(contents => {
      const extension = fileName.split('.').slice(-1)[0]
      const type = mime.getType(extension)
      if (type) {
        res.type(type).status(200).send(contents)

      } else {
        res.status(200).send(contents)
      }
    })
    .catch(_err => {
      res.status(404).send('Content not found')
    })
})

module.exports = router
