const { DataTypes } = require('sequelize')
const sequelize = require('../db/config')


const Card = sequelize.define('Card', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
});


module.exports = {
    Card
}
