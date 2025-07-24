const swaggerJsdoc = require("swagger-jsdoc"); // ----Swagger-JSDoc Library
const swaggerUi = require("swagger-ui-express"); // ----Swagger-UI Express Library

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API  bilan Swagger",
      version: "1.0.0",
      description: "API hujjatlari uchun Swagger dokumentatsiyasi",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    tags: [
      { name: "User", description: "User bo'limi bilan ishlash" },
      { name: "Customer", description: "Customer bo'limi bilan ishlash" },
    ],
  },
  apis: ["./src/routers/*.js"], // ----APIs
};

const swaggerSpec = swaggerJsdoc(options); // ----SwaggerSpec

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}; // ----SetupSwagger

module.exports = setupSwagger; // ----Exports SetupSwagger
