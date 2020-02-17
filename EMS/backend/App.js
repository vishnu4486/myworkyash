var express=require("express");
var mongoose=require("mongoose");
var cors = require('cors');
var route=require("../backend/routes/route.js")
var app=express();

var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(cors());

console.log("server connected");

mongoose.connect('mongodb://localhost:27017/expenselist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
});

mongoose.connection.on('connected',(error)=>{
    if(!error)
    console.log("Mongoose connected");
    else
    console.log(error);
});

app.listen("3000");
app.use("/routes",route);