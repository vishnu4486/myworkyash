var mongoose=require("mongoose");

var expenseSchema=mongoose.Schema({
    categoryId:{
        type:String,
        required:true
    },
    expenseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        //type:String,
       // required:true
    },
    expenseName:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    created_At:{
        type:Date,
        default:Date.now,
        required: true
    },
    updated_At:{
        type:Date,
        default:Date.now,
       required: true
    }
});
const expense =mongoose.model('Expense',expenseSchema);
//expense(collection) becomes expenses in db

module.exports=expense;