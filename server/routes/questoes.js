const express = require('express');
const router = express.Router();
const pool = require('../db/db');

router.get('/questoes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM questoes');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
