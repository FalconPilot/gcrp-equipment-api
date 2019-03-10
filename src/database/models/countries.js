
const Sequelize = require('sequelize')

const Country = (sequelize) => sequelize.define('countries', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true
  },
  acronym: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true
  },
  color: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  country: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  allies: {
    type: Sequelize.ARRAY(Sequelize.UUID),
    allowNull: true
  },
  economy: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  government: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  ruling_party: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  anthem: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  military_link: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  weapons: {
    type: Sequelize.ARRAY(Sequelize.UUID),
    allowNull: true
  }
})

module.exports = Country
