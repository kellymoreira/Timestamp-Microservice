const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./index.js"];

const doc = {
  info: {
    version: "1.0.0",
    title: "Timestamp Microservice",
    description:
      "Documenting API's from the first freeCodeCamp project. (study purposes)",
  },
  host: "timestamp-microservice-production-ee2f.up.railway.app",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Default",
      description: "Default endpoints",
    },
  ],
  paths: {
    "/": {
      get: {
        summary: "Get the current time",
        responses: {
          200: {
            description: "Successful response",
            schema: {
              type: "object",
              properties: {
                unix: { type: "number", description: "Unix timestamp" },
                utc: { type: "string", description: "UTC string" },
              },
            },
          },
        },
      },
    },
    "/api/{date}": {
      get: {
        summary: "Get time based on provided date",
        parameters: [
          {
            name: "date",
            in: "path",
            required: true,
            type: "string",
            description:
              "Date parameter in the format YYYY-MM-DD or Unix timestamp",
          },
        ],
        responses: {
          200: {
            description: "Successful response",
            schema: {
              type: "object",
              properties: {
                unix: { type: "number", description: "Unix timestamp" },
                utc: { type: "string", description: "UTC string" },
              },
            },
          },
          400: {
            description: "Invalid Date",
          },
        },
      },
    },
    "/api/hello": {
      get: {
        summary: "Get a greeting message",
        responses: {
          200: {
            description: "Successful response",
            schema: {
              type: "object",
              properties: {
                greeting: { type: "string", description: "Greeting message" },
              },
            },
          },
        },
      },
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  const app = express();

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(require("./swagger-output.json"))
  );

  const listener = app.listen(process.env.PORT || 3001, function () {
    console.log("Your app is listening on port " + listener.address().port);
  });
});
