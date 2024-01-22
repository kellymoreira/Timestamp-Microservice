/*
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js']; // Update the file path if necessary

const doc = {
  info: {
    version: '1.0.0',
    title: 'Timestamp Microservice',
    description: 'Documenting API\'s from the first freeCodeCamp project. (study purposes)',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Default',
      description: 'Default endpoints',
    },
  ],
  paths: {
    '/': {
      get: {
        summary: 'Get the current time',
        responses: {
          200: {
            description: 'Successful response',
            schema: {
              type: 'object',
              properties: {
                unix: { type: 'number', description: 'Unix timestamp' },
                utc: { type: 'string', description: 'UTC string' },
              },
            },
          },
        },
      },
    },
    '/api/{date?}': {
      get: {
        summary: 'Get time based on provided date',
        parameters: [
          {
            name: 'date',
            in: 'path',
            required: false,
            type: 'string',
            description: 'Date parameter in the format YYYY-MM-DD or Unix timestamp',
          },
        ],
        responses: {
          200: {
            description: 'Successful response',
            schema: {
              type: 'object',
              properties: {
                unix: { type: 'number', description: 'Unix timestamp' },
                utc: { type: 'string', description: 'UTC string' },
              },
            },
          },
          400: {
            description: 'Invalid Date',
          },
        },
      },
    },
    '/api/hello': {
      get: {
        summary: 'Get a greeting message',
        responses: {
          200: {
            description: 'Successful response',
            schema: {
              type: 'object',
              properties: {
                greeting: { type: 'string', description: 'Greeting message' },
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

  // Serve Swagger UI
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger-output.json')));

  // Start the server
  const listener = app.listen(process.env.PORT || 3000, function () {
    console.log("Your app is listening on port " + listener.address().port);
  });
});
*/

// swagger.js

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js']; // Update the file path if necessary

const doc = {
  info: {
    version: '1.0.0',
    title: 'Timestamp Microservice',
    description: 'Documenting API\'s from the first freeCodeCamp project. (study purposes)',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Default',
      description: 'Default endpoints',
    },
  ],
  paths: {
    '/': {
      get: {
        summary: 'Get the current time',
        responses: {
          200: {
            description: 'Successful response',
            schema: {
              type: 'object',
              properties: {
                unix: { type: 'number', description: 'Unix timestamp' },
                utc: { type: 'string', description: 'UTC string' },
              },
            },
          },
        },
      },
    },
    '/api/{date}': { // Updated path definition
      get: {
        summary: 'Get time based on provided date',
        parameters: [
          {
            name: 'date',
            in: 'path',
            required: true,
            type: 'string',
            description: 'Date parameter in the format YYYY-MM-DD or Unix timestamp',
          },
        ],
        responses: {
          200: {
            description: 'Successful response',
            schema: {
              type: 'object',
              properties: {
                unix: { type: 'number', description: 'Unix timestamp' },
                utc: { type: 'string', description: 'UTC string' },
              },
            },
          },
          400: {
            description: 'Invalid Date',
          },
        },
      },
    },
    '/api/hello': {
      get: {
        summary: 'Get a greeting message',
        responses: {
          200: {
            description: 'Successful response',
            schema: {
              type: 'object',
              properties: {
                greeting: { type: 'string', description: 'Greeting message' },
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

  // Serve Swagger UI
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger-output.json')));


  // Start the server
  const listener = app.listen(process.env.PORT || 2000, function () {
    console.log("Your app is listening on port " + listener.address().port);
  });
});
