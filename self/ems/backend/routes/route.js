const express = require('express');
const router=express.Router();
const category =require('../controller/categoryController');
router.get('/get',category.get);
router.post('/add',category.add);
router.put('/update/:id',category.update);
router.delete('/delete/:id',category.delete);

module.exports=router;
