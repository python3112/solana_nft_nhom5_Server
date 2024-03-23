const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ThucTapDB',{useNewUrlParser:true,useUnifiedTopology:true}) 
.then(()=>{
    console.log("CONNECT MONGODB ATLAS SUCCESSFULLY");
})    
.catch((err) => {
        console.log('ERROR CONNECT MONGODB');
        console.log(err);
    });

module.exports = { mongoose };