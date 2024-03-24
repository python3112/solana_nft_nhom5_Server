const mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {
        avata :{type:String },
        fullName:{type:String},
        userName:{type:String , require:true},
        userPass:{type:String , require:true} , 
        adressWallet : {type:String},
        point : {type :  Number},
        pointComplete : {type :  Number},
        userPms:{type:String , require:true}
    }, 
    {
        collection:'tb_users'
        
    }
)

let userModel = mongoose.model('userModel' , userSchema);
module.exports = {userModel};