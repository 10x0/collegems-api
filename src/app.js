const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errorHandler } = require('./error');
const { notFound } = require('./not-found');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
