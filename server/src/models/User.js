const sequelize  = require('../db/config.js')
const { DataTypes } = require('sequelize')

// create your User model here

const User = sequelize.define('User', {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true
    //   },
      username: DataTypes.STRING
    })


module.exports = {
    User
  }