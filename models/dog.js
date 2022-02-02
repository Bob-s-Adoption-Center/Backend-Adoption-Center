const { sequelize } = require('../db')
const { DataTypes, Model } = require("sequelize");

class Dog extends Model {}

Dog.init(
    {
        name: DataTypes.STRING,
        breed: DataTypes.STRING,
        age: DataTypes.INTEGER,
        location: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.STRING,
        gender: DataTypes.STRING

    },
    {
        sequelize,
        timestamps: false,
    }
);

module.exports = { Dog }