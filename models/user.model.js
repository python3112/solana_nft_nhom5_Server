var db = require('./db');

var userSchema = new db.mongoose.Schema(
    {
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

let userModel = db.mongoose.model('userModel' , userSchema);
module.exports = {userModel};