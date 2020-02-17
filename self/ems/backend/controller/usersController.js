const express = require("express");
const jwt = require('jsonwebtoken');
const {privatkey } =require('../config/config')
const user = require("../model/user");
var token;

exports.getUsers = (req, res, next) => {
    user.find(function(err, user) {
    if (err) {
      res, json(err);
    } else {
      res.json(user);
    }
  });
};
exports.add = (req, res, next) => {

  let newUser = new user({
            userId: req.body.userId,
            userFullName: req.body.userFullName,
            userName: req.body.userName,
            userPassword: req.body.userPassword,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPhone,
            userRole: req.body.userRole,
            userAdress: req.body.userAdress,
            created_At: new Date(req.body.created_At),
            updated_At: new Date(req.body.updated_At)
    });
    newUser.save((err, item) => {
      if (err) res.json(err);
      res.json({ msg: "Record Added sucess" });
    });
  };
  
  exports.update = (req, res, next) => {
    user.findOneAndUpdate(
      {
        userId: req.params.id
      },
      {
        $set: {
            userFullName: req.body.userFullName,
            userName: req.body.userName,
            userPassword: req.body.userPassword,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPhone,
            userRole: req.body.userRole,
            userAdress: req.body.userAdress,
            created_At: new Date(req.body.created_At),
            updated_At: new Date(req.body.updated_At)
        }
      },
      function(err, user) {
        if (err) return next(err);
        res.send(
          "user udpated. " + [user.userId, user.userName]
        );
      }
    );
  };
  
  exports.delete=(req,res,next)=>{
    user.deleteOne({"userId": req.params.id}, function (err,data) {
          if (err) {
             return next(err);
          }
         res.send(data.deletedCount > 0 ? "Deleted successfully!":"Deleted Not successfully! " );
      })
  }

  exports.login=(req,res,next)=>{
    user.find( { "userName": req.body.userName,"userPassword":req.body.password },function (err, data){
      if (err) return next(err);
      if(data.length> 0){
        token = jwt.sign({ username: req.body.usename }, privatkey);
        var obj={};
        obj.userFullName=data[0].userFullName;
        obj.userEmail=data[0].userEmail;
        obj.userName=data[0].userName;
        obj.userPassword=data[0].userPassword;
        obj.userPhone=data[0].userPhone;
        obj.userRole=data[0].userRole;
        obj.userAdress=data[0].userAdress;
        obj.token=token;
        res.json(obj);  
      }else{
        res.json(0);
      }
    });
    // if((req.body.userName =='yashyash') && (req.body.password =='123456')){
    //    token = jwt.sign({ username: req.body.usename }, privatkey);
    //    res.json(token);
    // }else{
    //    res.send("please check user name and password");
    // }
  }
