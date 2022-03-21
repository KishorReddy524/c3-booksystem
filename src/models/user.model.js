const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName : {type:String,required:true,minlength:3,maxlength:30},
    lastName : {type:String,required:false,minlength:3,maxlength:30},
    age: {type:Number,required:true},
    email:{type:String,required:true,unique:true},
},
    {
        versionKey:false,
        timestamps:true
    }

);

module.exports = mongoose.model("user", userSchema);

// age (integer, required, should be between 1 and 150)
// email (string, required, unique)
// profileImages: (array of imageUrls and atleast 1 profile image is required)
// timestamps (string, required)