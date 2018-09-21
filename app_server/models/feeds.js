var variables=require('../variables');

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var feeds=new Schema({
    id:Number,
    title:String,
    time:String,
    location:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    Npeople:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    userData:
        {
            id:String,
            username:String
        }
    

},{collection:"feeds"});
var feeds=mongoose.model("feeds",feeds);
module.exports=feeds;