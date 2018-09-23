const router = require('express').Router();

router.use('/schools', require('./schools'));
router.use('/students', require('./students'));

module.exports = router;
