const { sequelize,} = require('../db')
const {DataTypes, Model } = require("sequelize");

class Dogs extends Model {}

Dogs.init(
    {
        
    },
    {
        sequelize,
        timestamps: false,
    }
);

module.exports = { Dogs }