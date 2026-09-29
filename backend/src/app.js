const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const { CORS_ORIGIN } = require('./config/env');
const { fail } = require('./utils/response');

const app = express();

app.use(helmet());
app.use(cors({ origin: CORS_ORIGIN || 'http://localhost:3000' }));
app.use(express.json());
app.use('/api', routes);
app.use((req, res) => fail(res, 404, 'Route not found', 'NOT_FOUND'));
app.use(errorHandler);

module.exports = app;
