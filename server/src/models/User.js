const { db, DataTypes } = require('../db/config')

// create your User model here

let User = db.define("User", {
    id: DataTypes.INTEGER,
    username: DataTypes.STRING
});


module.exports = {
    User
  }