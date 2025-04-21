const express = require('express');
const router = express.Router();

const customercontroller = require('../controllers/customercontroller');

router.get('/', customercontroller.list);
router.post('/add', customercontroller.save);
router.get('/delete/:id', customercontroller.delete);
router.get('/update/:id', customercontroller.edit);
router.post('/update/:id', customercontroller.update);




module.exports = router;