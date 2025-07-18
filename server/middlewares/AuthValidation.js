const joi=require('joi')


const signUpValidation=(req,res,next)=>{
    const Schema=joi.object({
        name:joi.string().min(3).max(100).required(),
        email:joi.string().email().required(),
        password:joi.string().min(6).max(10).required()
    })
    const {error}=Schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message : "Bad Requesst",error})
    }
    next();

}

const loginValidation=(req,res,next)=>{
    const Schema=joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(6).max(10).required()
    })
    const {error}=Schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message : "Bad Requesst",error})
    }
    next()
}
module.exports={
     signUpValidation,
     loginValidation
}