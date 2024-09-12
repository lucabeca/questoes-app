const { getQuestoesDb } = require('../db/questoes.db');

async function getQuestoesService() {
    const query = await getQuestoesDb();
    return query.rows;
}

module.exports = { getQuestoesService};