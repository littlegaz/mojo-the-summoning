const { db, DataTypes } = require('../db/config')


let Card = db.isDefined("Card", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
});


module.exports = {
    Card
}
