const User=require('../models/user')

//profile route
exports.read=(req,res)=>{
    req.profile.hashed_password=undefined
    return res.json(req.profile); 
}