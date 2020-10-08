const express = require('express');
const router = express.Router();
const db = require('../db/');

router.get('/', (req, res) => {
  const { search, type } = req.query;
  if (search && type) {
    return db
    .select()
    .from('Books')
    .where(`Books.${type}`, '=', search)
    .then((data) => {
      if (data.length === 0) {
        return res.status(500).send({ data: 'NO TENEMOS DATOS DE ESE LIBRO' });
      }
      res.render('../templates/search.pug', { data });
    });
  }
  db
  .select()
  .from('Books')
  .leftJoin('Authors', 'Authors.author_id', '=', 'Books.author_id')
  .limit(24)
  .then((data) => {
    res.render('../templates/', { data });
  }).catch((e) => console.error('Error by pp:', e));
});

module.exports = router;
