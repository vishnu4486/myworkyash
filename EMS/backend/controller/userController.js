const user=require("../model/user.js");
const jwt = require('jsonwebtoken');
const bcrypt=require("bcryptjs");

exports.getUsers = (req, res, next) => {
    user.find(function (err, user) {
        if (err) {
            res.json(err);
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.json(user);
        }
    })
};

exports.registerUser = (req, res, next) => {
  
    let newUser = new user({
        id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        loginName: req.body.loginName,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        role: req.body.role,
        status: req.body.status
    });
   
    newUser.save((err,item)=>{
        if (err) 
            throw err;
        else {
            res.json({msg:"category added successfully"});
        }
    })
    
};


exports.loginUser = (req, res, next) => {
   
    user.findOne({"loginName":req.body.loginName},function(err,user){
        if(err){
            res.json(err);
        }else{
            if((user===undefined) || (user==null)){
                console.log("Invalid user");
            }else{
               
              if(bcrypt.compareSync(req.body.password, user.password)){
                console.log("login success");
              }else{
                console.log("wrong password");
               }
            }
            res.json(user);
        }
    });
 }

// exports.loginUser = (req, res, next) => {
//     console.log(req.body);
    
//     user.findOne({"loginName":req.body.loginName,"password":req.body.password},function(err,user){
//         if(err){
//             res.json(err);
//         }else{
//             if((user===undefined) || (user==null)){
//                 console.log("Invalid user");
//             }else{
//                 console.log("login success");
//             }
//             res.json(user);
//         }
//     })
//  }

exports.updateUser = function (req, res, next) {
    user.findOneAndUpdate({
        "id": req.params.id
    }, {
        $set: {
            id: req.params.id,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            loginName: req.body.loginName,
            password: req.body.password,
        }
    }, function (err, user) {
        if (err) return next(err);
        res.send('User udpated. ');
    });
};

exports.deleteUser = function (req, res, next) {
    user.deleteOne({
        "id": req.params.id
    }, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully! ');
    })
};