'use strict'

const scale = ['V_LOW', 'LOW', 'S_AVERAGE', 'AVERAGE', 'A_AVERAGE', 'MEDIUM', 'M_HIGH', 'HIGH', 'V_HIGH']
const percentage = {
  min: 0,
  max: 100
}

module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.createTable('weapons', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      image_url: {
        type: Sequelize.TEXT,
        allowNull: true,
        validate: {
          isUrl: true
        }
      },
      image_author: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      author_link: {
        type: Sequelize.TEXT,
        allowNull: true,
        validate: {
          isUrl: true
        }
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      action: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      caliber: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      production_cost: {
        type: Sequelize.ENUM,
        values: scale,
        allowNull: true
      },
      supply_cost: {
        type: Sequelize.ENUM,
        values: scale,
        allowNull: true
      },
      firepower: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: percentage
      },
      accuracy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: percentage
      },
      reliability: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: percentage
      },
      pros: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true
      },
      cons: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    })
  ),

  down: (queryInterface, Sequelize) => (
    queryInterface.dropTable('weapons')
  )
}
