const express = require('express');
const router=express.Router();
const expense =require('../controller/expenseController');
router.get('/',expense.get);
router.post('/',expense.add);
router.put('/:id',expense.update);
router.delete('/:id',expense.delete);

module.exports=router;