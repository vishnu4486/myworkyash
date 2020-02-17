const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    userId: {
    type: String,
    require: true
  },
  userFullName: {
    type: String,
    require: true
  },
  userName: {
    type: String,
    require: true
},
userPassword:{
    type: String,
    require: true
    
},
userEmail:{
    type: String,
    require: true
    
},
userPhone:{
    type: String,
    require: true
    
},
userRole:{
    type: String,
    require: true
    
},
userAdress:{
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

const user = mongoose.model("user", userSchema);
module.exports = user;
