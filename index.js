const express = require("express"); // ----Express Framework
const cors = require("cors"); // ----CORS Middleware
const setupSwagger = require("./src/documents/swagger.doc"); // ----Swagger Setup
const sequelize = require("./src/configs/database"); // ----Database Configuration
require("dotenv").config(); // ----Environment Variables

const app = express(); // ----Express Application

app.use(express.json()); // ----JSON Middleware
app.use(cors({ origin: "*" })); // ----CORS Middleware

setupSwagger(app); // ----Swagger Setup

// ----Routers
const user = require("./src/routers/user.routes");
app.use("/user", user); // ----User Router
const customer = require("./src/routers/customer.routes");
app.use("/customer", customer); // ----Customer Router

const PORT = process.env.PORT || 4000; // ----Port Configuration
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ${PORT} PORTida ishga tushdi!`);
  });
}); // ----Server Start
