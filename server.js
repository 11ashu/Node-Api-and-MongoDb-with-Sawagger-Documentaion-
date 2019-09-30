const http = require('http');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const db = require('./lib/db');
const API_PORT = process.env.API_PORT || 3000;
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const accounts = require('./routes/accounts');
// Cors Enables
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});


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
    apis: ['routes/*/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, false, { validatorUrl: null }));
app.get('/',(req, res, next) => {
  res.send('<h2>Node Api and MongoDb With Swagger doc => <a href="/api-docs">/api-docs</a></h2>');
});



app.use('/accounts', accounts);


const server = http.createServer(app);
db.connect();
server.listen(API_PORT, () => {
    console.log(`Listen on port ${API_PORT}`);
});

