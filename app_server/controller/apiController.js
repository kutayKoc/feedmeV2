var users=require('../models/users');
const variables=require('../variables');
var feeds=require('../models/feeds');
module.exports.index=(req,res)=>{
    res.send("data");
}

module.exports.newUser=(req,res)=>{
    var userData=req.body.data;
    if(userData==null || userData== typeof(undefined)){
        res.status(400).send(variables.res400);
    }else{
        var new_user=new users({
            username:userData.username,
            name:(userData.name!="undefined" || userData.name!=null)? userData.name : " ",
            surname:(userData.surname!="undefined" || userData.surname!=null)? userData.surname : " ",
            image: (userData.image!="undefined" || userData.image!=null)? userData.image : " "  ,
            email:userData.email,
            password:userData.password,
            socialNetwork:(userData.socialNetwork!="undefined" || userData.socialNetwork!=null)? userData.socialNetwork : " "
        })
    
        new_user.save((err,result)=>{
            if(err){
                res.status(400).send(err);
            }else{
                res.status(200).send(result);
            }
        })
    }
}

module.exports.loginControl=(req,res)=>{
    var loginData=req.body.data;
    if(loginData==null || loginData== typeof(undefined)){
        res.status(400).send("Data must be a json");
    }else{
        //login username or email
        var username=loginData.username
        var passwd=loginData.password;
        users.find({password:passwd,$or:[{username:username},{email:username}]},(err,result)=>{
            if(err){
                res.status(400).send(err);
            }else{
                if(result.length<=0){
                    res.status(400).send(variables.res400);
                }else{
                    res.status(200).send(result);
                }
            }
        })
    }
}

module.exports.getAll=(req,res)=>{
    users.find({},(err,result)=>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(result);
        }
    })
}

module.exports.getAllFeeds=(req,res)=>{
    
    feeds.find({},(err,result)=>{
        if(err){
            res.status(400).send(variables.res400);
        }else{
            res.status(200).send(result);
        }
    })
}

module.exports.getFeedById=(req,res)=>{
    var id=req.params.id;
    feeds.find({id:id},(err,result)=>{
        if(err){
            res.status(400).send(variables.res400);
        }else{
            res.status(200).send(result);
        }
    })
}