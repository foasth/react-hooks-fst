const User = require('../schemas/user')


module.exports.REGISTER =(req,res)=>{
    
    console.log(req.body)
    if(!req.body.firstName){
        return res.send({error:true,msg:'First name required'})
    }
    if(!req.body.lastName){
        return res.send({error:true,msg:'Last name required'})
    }
    if(!req.body.email){
        return res.send({error:true,msg:'Email required'})
    }
    if(!req.body.password){
        return res.send({error:true,msg:'Password required'})
    }
    const user = new User(req.body)
    user.save(req.body)
    .then(ok=>{
        res.send({error:false,msg:'User Added'})
    })
    .catch(err=>{
        console.log(err)
        res.send({error:true,msg:'User not Added'})
    })
}
module.exports.ALL_USER =(req,res)=>{

    User.find()
        .then(users=>{
            res.send(users)
        })
        .catch(err=>{
            res.send('NOT OK')
        })

}
module.exports.LOGIN = async(req,res)=>{
    console.log(req.body)
    if(!req.body.email){
        return res.send({error:true,msg:'Email required'})
    }
    if(!req.body.password){
        return res.send({error:true,msg:'Password required'})
    }

    const user= await User.findOne({email:req.body.email}).exec()
    if (!user)res.send({error:true, msg:'EMAIL NOT VALID'})
    if(user.password!==req.body.password) res.send({error:true, msg:'PASSWORD NOT VALID'})
    res.send('OK')
    
    .then(ok=>{
        res.send({error:false,msg:'User Connected'})
    })
    .catch(err=>{
        console.log(err)
        res.send({error:true,msg:'User not Connected'})
    })

}
