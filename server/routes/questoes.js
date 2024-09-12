const express = require('express');
const router = express.Router();
const pool = require('../db/db');
const { getQuestoes } = require('../controllers/questoes.controller');

router.get('/oi', async (req, res) => {
  try {
    // const result = await pool.query('SELECT * FROM questoes');
    res.json({data: 'oi'});
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/questoes', getQuestoes);

module.exports = router;
