const { default: mongoose } = require('mongoose');
const mongosee=require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/artexplorerdb").then(()=>{
    console.log("connection sucessful");
}).catch((err)=>{
    console.log(err);
});

const artSchema= mongoose.Schema({
    firstname:String,
    address:String,
    mobileno:String,
    description:String
});
 

const artexplorer=new mongosee.model('artexplorer',artSchema);


module.exports=artexplorer;