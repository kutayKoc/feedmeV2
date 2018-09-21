var variables=require('../variables');

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var users=new Schema({
    id:Number,
    username:{
        type:String,
        unique:true,
        required:[true, variables.usernameMessage]
    },
    name:String,
    surname:String,
    image:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,variables.passwordMessage],
        min: [6, 'Min Char Error']
    },
    socialNetwork:[{type:String}],
    feed:[{
        id:Number,
        title:String,
        image:String,
        time:Number,
        location:String
    }]

},{collection:"users"});
var users=mongoose.model("users",users);
module.exports=users;