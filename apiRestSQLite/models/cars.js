const{ DataTypes } = require('sequelize');

const db = require("./index");

const carsModel = db.define("Cars", {
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    año: DataTypes.INTEGER
});

module.exports = carsModel;