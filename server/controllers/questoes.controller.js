const { getQuestoesService } = require('../services/questoes.service');

async function getQuestoes(req, res) {
    try {
        const dados = await getQuestoesService();
        res.json(dados);
    } catch (err) {
        console.error(err.message);
        res.send(500);
    }
}

module.exports = { getQuestoes };