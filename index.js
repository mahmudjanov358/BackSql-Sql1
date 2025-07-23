const express = require("express"); // ----Express Framework
const cors = require("cors"); // ----CORS Middleware
const setupSwagger = require("./documents/swagger.doc"); // ----Swagger Setup
const sequelize = require("./configs/database"); // ----Database Configuration
require("dotenv").config(); // ----Environment Variables

const app = express(); // ----Express Application

app.use(express.json()); // ----JSON Middleware
app.use(cors({ origin: "*" })); // ----CORS Middleware

setupSwagger(app); // ----Swagger Setup

const PORT = process.env.PORT || 4000; // ----Port Configuration
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ${PORT} PORTida ishga tushdi!`);
  });
}); // ----Server Start
