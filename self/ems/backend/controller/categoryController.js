const express = require("express");
const category = require("../model/category");

exports.get = (req, res, next) => {
  category.find(function(err, category) {
    if (err) {
      res, json(err);
    } else {
      res.json(category);
    }
  });
};

exports.add = (req, res, next) => {
  let newCategory = new category({
    categoryId: req.body.categoryId,
    categoryName: req.body.categoryName,
    created_At: new Date(req.body.created_At),
    updated_At: new Date(req.body.updated_At)
  });
  newCategory.save((err, item) => {
    if (err) res.json(err);
    res.json({ msg: "Record Added sucess" });
  });
};

exports.update = (req, res, next) => {
  category.findOneAndUpdate(
    {
      categoryId: req.params.id
    },
    {
      $set: {
        categoryName: req.body.categoryName,
        created_At: new Date(req.body.created_At),
        updated_At: new Date(req.body.updated_At)
      }
    },
    function(err, category) {
      if (err) return next(err);
      res.send(
        "Category udpated. " + [category.categoryId, category.categoryName]
      );
    }
  );
};

exports.delete=(req,res,next)=>{
    category.deleteOne({"categoryId": req.params.id}, function (err,data) {
        if (err) return next(err);
        res.send(data.deletedCount > 0 ? "Deleted successfully!":"Deleted Not successfully! " );
    })
}