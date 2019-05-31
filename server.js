const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dishesRouter = require('./dishes/dishes-router');


const server = express();

server.use(helmet());
server.use(express.json());

// Test
server.get('/', (req, res) => {
  res.send('The api is working.');
});

module.exports = server;