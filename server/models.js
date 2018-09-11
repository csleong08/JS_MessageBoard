const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    cname: {
        type: String, 
        minlength: [2, "Your name is too short, a minimum of two characters are required"]
    },
    comment: {
        type: String,
        minlength: [1, "Please enter a comment"]
    }
}, {timestamps:true});

const MessageSchema = new mongoose.Schema({
    mname: {
        type: String, 
        required: true,
        minlength: [2, "Your name is too short, a minimum of two characters are required"]
    },
    message: {
        type: String,
        required: true, 
        minlength: [1, "Please enter a message"]
    },
    comments: [CommentSchema]
}, {timestamps:true});

mongoose.connect("mongodb://localhost:27017/MessageBoard", {useNewUrlParser:true}, 
(errs)=>console.log(errs?errs:"db gucci"));

module.exports = mongoose.model('Message', MessageSchema);
