const router = require('express').Router();
const { Student } = require('../../db/models');

router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Student.findById(req.params.id)
    .then(student => res.send(student))
    .catch(next);
});

//POST, PUT, DELETE
router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.send(student))
    .catch(next);
});

module.exports = router;
