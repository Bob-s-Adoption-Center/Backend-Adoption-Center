const { sequelize } = require('../db')
const { DataTypes, Model } = require("sequelize");

class Dogs extends Model {}

Dogs.init(
    {
        // DogId: DataTypes.INTEGER,
    },
    {
        sequelize,
        timestamps: false,
    }
);

module.exports = { Dogs }