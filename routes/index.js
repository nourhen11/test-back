const express = require('express');
const router = express.Router();
const Index = require('../controlles/index')

router.get('/',Index.getHome)
router.get('/products',Index.getProducts);



module.exports = router;