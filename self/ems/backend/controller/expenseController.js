const express = require("express");
const expense = require("../model/expense");

exports.get = (req, res, next) => {
  expense.find(function(err, expense) {
    if (err) {
      res, json(err);
    } else {
      res.json(expense);
    }
  });
};

exports.add = (req, res, next) => {
  let newexpense = new expense({
    expenseId: req.body.expenseId,
    expenseName: req.body.expenseName,
    created_At: new Date(req.body.created_At),
    updated_At: new Date(req.body.updated_At),
    expenseAmount:req.body.expenseAmount
  });
  newexpense.save((err, item) => {
    if (err) res.json(err);
    res.json({ msg: "Record Added sucess" });
  });
};

exports.update = (req, res, next) => {
  expense.findOneAndUpdate(
    {
      expenseId: req.params.id
    },
    {
      $set: {
        expenseName: req.body.expenseName,
        expenseAmount:req.body.expenseAmount,
        created_At: new Date(req.body.created_At),
        updated_At: new Date(req.body.updated_At)
      }
    },
    function(err, expense) {
      if (err) return next(err);
      res.send(
        "expense udpated. " + [expense.expenseId, expense.expenseName]
      );
    }
  );
};

exports.delete=(req,res,next)=>{
    expense.deleteOne({"expenseId": req.params.id}, function (err,data) {
        if (err) return next(err);
        res.send(data.deletedCount > 0 ? "Deleted successfully!":"Deleted Not successfully! " );
    })
}