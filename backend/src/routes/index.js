const express = require('express');
const pool = require('../config/db');
const { ok } = require('../utils/response');

const router = express.Router();

router.get('/health', async (req, res) => {
  let db = 'connected';
  try {
    await pool.query('SELECT 1');
  } catch (error) {
    db = 'not connected';
  }
  return ok(res, { status: 'up', time: new Date().toISOString(), db }, 'Service is healthy');
});

module.exports = router;
