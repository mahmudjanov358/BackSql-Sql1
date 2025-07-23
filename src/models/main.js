const Sequelize = require("sequelize"); // ----Sequelize Library
const sequelize = require("../configs/database"); // ----Database Configuration

const User = require("./user.model")(sequelize, Sequelize); // ----User Model

module.exports = { User, sequelize }; // ----Exports Models
