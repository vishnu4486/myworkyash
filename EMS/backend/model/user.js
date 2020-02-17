const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");

var UserSchema = mongoose.Schema({
    id: {
        type: Number,
        required:"unique id required",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 10
    },
    email: {
        type: String,
        unique: true,
        required: "Email Required"
    },
    loginName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: "Password required",
        minLength:[4,"password must be atleast 4 characters"]
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});


// hash user password before saving into database
UserSchema.pre('save', function(next){
   
    this.password = bcrypt.hashSync(this.password, 10);
    next();
    });


const user = mongoose.model('User', UserSchema);

module.exports = user;