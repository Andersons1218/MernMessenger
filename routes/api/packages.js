const express = require('express');
const router = express.Router();
const packCtrl = require('../../controllers/api/package')

// GET /api/items
router.get('/', packCtrl.index);
// GET /api/items/:id
router.get('/:id', packCtrl.show);

router.post('/addOrder', packCtrl.addOrder)

module.exports = router;
