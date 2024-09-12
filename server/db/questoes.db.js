const pool = require('../db/db');

async function getQuestoesDb() {
    const query = await pool.query('SELECT * FROM questoes');
    return query; 
}

module.exports = { getQuestoesDb };