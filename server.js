const http = require('http');
const app = require('./app');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const db = require('./lib/db');
const API_PORT = process.env.API_PORT || 3000;

const swaggerDefinition = {
    info: {
      title: 'Node Api and MongoDb with Sawagger Documentaion ',
      version: '1.0.0',
      description: 'Endpoints to test the user registration routes',
    },
    host: `localhost:${API_PORT}`,
    basePath: '/',
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        scheme: 'bearer',
        in: 'header',
      },
    },
};

const options = {
    swaggerDefinition,
    apis: ['routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, false, { validatorUrl: null }));

const server = http.createServer(app);
db.connect();
server.listen(API_PORT, () => {
    console.log(`Listen on port ${API_PORT}`);
});
module.exports = app;