const path = require('path')
const sequelize = require('sequelize')
const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite')
})

module.exports = {
  db,
  DataTypes,
  sequelize,
}