const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bodyParser= require('body-parser');
const router=require('./routes/route');
const users =require('./routes/users');
const expense =require('./routes/expense');
const swaggerDocs = require("../swaggerDoc");

const app =express();
app.use(cors('http://localhost:4200'));
console.log("server is start");
mongoose.connect('mongodb://localhost:27017/ems1',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

mongoose.connection.on('connected',()=>{
    console.log('data base connected');
});

mongoose.connection.on("error",(err)=>{
    console.log(err);
});

swaggerDocs(app);

app.use(bodyParser.json());

app.use('/category',router);

app.use('/users',users);

// app.use('/expense',expense);
app.use('/expense',expense);
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(5000);