const express = require('express');
const router = express.Router();
const product = require('../controler/ProductsControler');
const { body } = require('express-validator');


router.post("/diplayfood",product.displaydata )
router.post("/categoryname",product.categorydata )




module.exports = router;
