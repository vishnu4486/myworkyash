var swaggerJsDoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
// var routes = require("./backend/routes/users");
var routes = require("./backend/routes/users");


const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "EMS API",
      version: "1.0",
      description: "Test Purpose",
      servers: ["http://localhost:5000"]
    }
  },
  basePath: "api/v1",
//   apis: ["./routes/users.js"]
  apis: ["./backend/routes/users.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = app => {  
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs,
    //  {explorer: false, customCss: '.swagger-ui .topbar { display:none }'}
     ));
  app.use("users/get", routes);
  app.use(function(err, req, res, next) {
      if(err.isBoom) {
            return res.status(err.output.statusCode).json(err.output.payload)
      }
  });
};
