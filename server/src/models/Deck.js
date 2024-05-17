const {DataTypes} = require ('sequelize')
const sequelize = require('../db/config')

const Deck = sequelize.define('Deck', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
});



module.exports = {
    Deck
}