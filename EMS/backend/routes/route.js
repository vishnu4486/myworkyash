var express=require("express");
var router=express.Router();
var category=require("../controller/categoryController");
var expense=require("../controller/expenseController");
const user = require("../controller/userController");

//get
router.get('/categories',category.getCategories);

//get by id
router.get('/category/:categoryId',category.getCategory);

//add
router.post('/category', category.addCategories);

//upadte
 router.put('/category/:categoryId', category.updateCategory);

 //delete
 router.delete('/category/:categoryId', category.deleteCategory);

 //*************************************************************** */

 //get
router.get('/expenses',expense.getExpenses);

//get by id
router.get('/expense/:expenseId',expense.getExpense);

//get by category id
router.get('/expenses/:categoryId',expense.getExpensesByCategory);

//add
router.post('/expense', expense.addExpenses);

//upadte
 router.put('/expense/:expenseId', expense.updateExpense);

 //delete
 router.delete('/expense/:_id', expense.deleteExpense);

 //*************************************************************** */
 router.get('/users', user.getUsers);

 router.post('/user', user.registerUser);
 
 router.post('/loginUser', user.loginUser);

 router.put('/user/:id', user.updateUser);

 router.delete('/user/:id', user.deleteUser);
  
module.exports=router;