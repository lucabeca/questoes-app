const express = require('express');
const router = express.Router();
const pool = require('../db/db');
const { getQuestoes } = require('../controllers/questoes.controller');

router.get('/questoes', getQuestoes);

router.get('/anoProva', async (req, res) => {
  try {
    const query = await pool.query(
      `
      select 
        distinct extract(year from p.ano) as value,
        extract(year from p.ano) as label
      from provas p
      order by 1 desc
      `
    );
    const ret = query.rows;
    res.json(ret);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/modalidade', async (req, res) => {
  try {
    const query = await pool.query(
      `
      SELECT 
	      distinct id as value,
	      nome as label
		  FROM modalidades
      ORDER BY 1
      `
    );
    const ret = query.rows;
    res.json(ret);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/nivel', async (req, res) => {
  try {
    const query = await pool.query(
      `
      SELECT 
	      distinct id as value,
	      nome as label
		  FROM niveis
      ORDER BY 1
      `
    );
    const ret = query.rows;
    res.json(ret);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/fase', async (req, res) => {
  try {
    const query = await pool.query(
      `
      select 
        distinct id as value,
        fase as label
      from provas p
      order by 1 desc
      `
    );
    const ret = query.rows;
    res.json(ret);
  } catch (err) {
    console.error(err.message);
  }
});


router.get('/categoria', async (req, res) => {
  try {
    const query = await pool.query(
      `
      select 
        distinct id as value,
        nome as label
      from categorias
      order by 1 desc
      `
    );
    const ret = query.rows;
    res.json(ret);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/subcategoria', async (req, res) => {
  try {

    const { categorias } = req.query;

    const categoriasCerta = categorias ?? null;

    const query = await pool.query(
      `
      select 
        distinct s.id as value,
        s.nome as label
      from subcategorias s
      where s.categoria_id = any($1::int[]) or $1 is null
      order by 1 desc
      `, [categoriasCerta]
    );
    const ret = query.rows;
    res.json(ret);
  } catch (err) {
    console.error(err.message);
  }
});


router.get('/topico', async (req, res) => {
  try {

    const { subcategorias } = req.query;

    const subCategoriasCerta = subcategorias ?? null;

    const query = await pool.query(
      `
      select 
        distinct p.id as value,
        p.nome as label
      from topicos p
      where p.subcategoria_id = any($1::int[]) or $1 is null
      order by 1 desc
      `, [subCategoriasCerta]
    );
    const ret = query.rows;
    res.json(ret);
  } catch (err) {
    console.error(err.message);
  }
});



module.exports = router;