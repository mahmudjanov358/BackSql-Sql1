const { Sequelize } = require("sequelize"); // ----Sequelize Library
require("dotenv").config(); // ----Environment Variables Library

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
); // ----Sequelize Instance

module.exports = sequelize; // ----Exports Sequelize Instance
