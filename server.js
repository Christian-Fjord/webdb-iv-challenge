const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile.js');

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

// Test
server.get('/', (req, res) => {
  res.send('The api is working.');
});

module.exports = server;