const sequelize  = require('../db/config')
const { DataTypes } = require('sequelize')

// create your User model here

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      username: DataTypes.STRING
    })


module.exports = {
    User
  }