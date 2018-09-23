const router = require('express').Router();
const { School } = require('../../db/models');

router.get('/', (req, res, next) => {
  School.findAll()
    .then(schools => res.send(schools))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  School.findById(req.params.id)
    .then(school => res.send(school))
    .catch(next);
});

//POST, PUT, DELETE
router.post('/', (req, res, next) => {
  School.create(req.body)
    .then(school => res.send(school))
    .catch(next);
});
module.exports = router;
