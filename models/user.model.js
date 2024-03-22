const mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {
        userName:{type:String , require:true},
        userPass:{type:String , require:true} , 
        adressWallet : {type:String},
        point : {type :  Number},
        pointComplete : {type :  Number},
        idMissComplete:[{type :  mongoose.Schema.Types.ObjectId , ref : 'mission'}],
        userPms:{type:String , require:true}
    }, 
    {
        collection:'tb_users'
        
    }
)

let userModel = mongoose.model('userModel' , userSchema);
module.exports = {userModel};