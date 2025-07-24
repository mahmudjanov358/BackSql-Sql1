const Sequelize = require("sequelize"); // ----Sequelize Library
const sequelize = require("../configs/database"); // ----Database Configuration

const User = require("./user.model")(sequelize, Sequelize); // ----User Model
const Customer = require("./customer.model")(sequelize, Sequelize); // ----Customer Model

module.exports = { User, Customer, sequelize }; // ----Exports Models
