const { db, DataTypes } = require('../db/config')


let Attack = db.define("attack", {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER
})


module.exports = {
    Attack
}