//constructing a schema 
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}

},
{
    versionKey:false
})

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel
