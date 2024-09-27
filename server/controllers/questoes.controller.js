const { getQuestoesService } = require('../services/questoes.service');

async function getQuestoes(req, res) {
    try {
        const {oi} = req.query;
        console.log(oi);
        const dados = await getQuestoesService(oi);
        res.json(dados);
    } catch (err) {
        console.error(err.message);
        res.send(500);
    }
}

module.exports = { getQuestoes };