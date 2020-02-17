const mongoose = require("mongoose");
const expenseSchema = mongoose.Schema({
    expenseId: {
    type: String,
    require: true
  },
  expenseName: {
    type: String,
    require: true
  },
  expenseAmount: {
    type: String,
    require: true
  },
  created_At: {
    type: Date,
    default: Date.now
  },
  updated_At: {
    type: Date,
    default: Date.now
  }
});

const expense = mongoose.model("expense", expenseSchema);
module.exports = expense;
