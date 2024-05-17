const { DataTypes } = require('sequelize')
const sequelize = require('../db/config.js')


const Attack = sequelize.define("Attack", {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true
    //   },
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER
});


module.exports = {
    Attack
}