const { DataTypes } = require('sequelize')
const sequelize  = require('../db/config.js')



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