const express = require('express');
const router = express.Router();

const fileCtrl = require('../controllers/file');
const auth = require('../middleware/auth');

router.get('/', auth, fileCtrl.getAllFile);
router.get('/:id', auth, fileCtrl.getMyFile);

module.exports = router;
