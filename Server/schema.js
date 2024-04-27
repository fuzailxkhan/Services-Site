const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    pfp:String
});

module.exports = mongoose.model('ServicesSiteUsers',userSchema);