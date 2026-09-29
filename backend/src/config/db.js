const { Pool } = require('pg');
const { DATABASE_URL, DB_SSL } = require('./env');

const config = { connectionString: DATABASE_URL };
if (DB_SSL === 'true') config.ssl = { rejectUnauthorized: false };

module.exports = new Pool(config);
