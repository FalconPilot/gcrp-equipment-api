const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const env = process.env.NODE_ENV || 'development'

const config = require(`${__dirname}/../config`)[env]

console.log(config.use_env_variable)

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config)

const db = (
  fs.readdirSync(__dirname)
    .filter(file => (
      file.indexOf('.') !== 0 &&
      file !== path.basename(__filename) &&
      file.slice(-3) === '.js'
    ))
    .reduce((acc, file) => {
      const model = sequelize.import(path.join(__dirname, file))
      return Object.assign(acc, { [model.name]: model })
    }, {
      sequelize: sequelize,
      Sequelize: Sequelize
    })
)

Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db)
  }
})

module.exports = db
