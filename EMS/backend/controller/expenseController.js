var expense=require("../model/expense.js");

//get all
exports.getExpenses=(req,res,next)=>{
    expense.find(function(err,expense){
        if(err){
            res.json(err);
        }else{
            res.json(expense);
        }
    })
};

//get by expense id
exports.getExpense=(req,res,next)=>{
    expense.findOne({"expenseId":req.params.expenseId},function(err,expense){
        if(err){
            res.json(err);
        }else{
            res.json(expense);
        }
    })
};

//get by category id
exports.getExpensesByCategory=(req,res,next)=>{
    expense.find({"categoryId":req.params.categoryId},function(err,expense){
        if(err){
            res.json(err);
        }else{
            res.json(expense);
        }
    })
};

exports.addExpenses=(req,res,next)=>{
    let newExpense=new expense({
        categoryId:req.body.categoryId,
        expenseName: req.body.expenseName,
        amount:req.body.amount,
        created_At: req.body.created_At,
        updated_At: req.body.updated_At
        // created_At: new Date(),
        // updated_At: new Date()
    });
    newExpense.save((err,item)=>{
        console.log(newExpense);
        if (err) {
            res.json(err);
        } else {
            res.json({msg:"Expense added successfully"});
        }
    })
    
};

exports.updateExpense = function (req, res,next) {
    expense.findOneAndUpdate({
                "expenseId": req.params.expenseId
            }, {
                $set: {
                    categoryId:req.body.categoryId,
                   // expenseId: req.params.expenseId,
                    expenseName: req.body.expenseName,
                    amount: req.body.amount,
                    created_At: new Date(),
                    updated_At: new Date()
                }
            }, function (err, expense) {
        if (err) return next(err);
        res.send('Expense udpated! ');
    });
};


// exports.updateExpense = function (req, res,next) {
//     expense.findOneAndUpdate({"expenseId": req.params.expenseId}, {$set: req.body}, function (err, expense) {
//         if (err) return next(err);
//         res.send('Expense udpated! ');
//     });
// };

exports.deleteExpense = function (req, res,next) {
    expense.deleteOne({"_id": req.params._id}, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully! ');
    })
};



