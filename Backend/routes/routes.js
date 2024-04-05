const express = require('express');
const mainController = require('../controller/control');

const router = express.Router();

router.get('/', (req, res) => res.send('hello world'));
router.get('/crud', mainController.getTableData);
router.post('/crud', mainController.postTableData);
router.put('/crud', mainController.putTableData);
router.delete('/crud', mainController.deleteTableData);

module.exports = router;
