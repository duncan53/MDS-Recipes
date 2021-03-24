const express = require('express');
const router = express.Router();

const fileCtrl = require('../controllers/file');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.post('/upload', auth, multer, fileCtrl.createFile);
router.get('/', auth, fileCtrl.getAllFile);
router.get('/:id', auth, fileCtrl.getMyFile);

module.exports = router;
