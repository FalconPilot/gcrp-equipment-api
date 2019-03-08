const cors = require('cors')
const app = require('express')()

const plugRouter = require('./router')

app.use(cors())

// Plug router to app
plugRouter(app)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`> App is now listening on port ${PORT}`)
})
