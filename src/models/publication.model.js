const mongoose = require("mongoose")

const publicationSchema = new mongoose.Schema({
    Name : {type:String,required:true},
     
},
    {
        versionKey:false,
        timestamps:true
    }

);

module.exports = mongoose.model("publication", publicationSchema);

// Publication Model ( Publication is the company which releases the book )

// name ( references post collection)
// timestamps (string, required)