const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    likes : {type:integer,default:0},
     coverImage : {type:String,required:1},
    content: {type:Number,required:true},
     
},
    {
        versionKey:false,
        timestamps:true
    }

);

module.exports = mongoose.model("book", bookSchema);
// likes (integer, minimum default is 0)
// coverImage (string, required and it can be 1 only)
// content ( string, required)
// timestamps (string, required)