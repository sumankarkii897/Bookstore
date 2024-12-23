import User from "../model/user_model.js";
import bcrypt from "bcrypt"
const saltRound=10;
export const signUp=async(req,res)=>{
try {
    const userData={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }
    let checkUserAlreadyExists=await User.findOne({email:userData.email})
    if(checkUserAlreadyExists){

       return res.status(400).json({msg:"user already exists"
    
       })
    }
    const hashedPassword=await bcrypt.hash(userData.password,saltRound);
    let user=await User.create({...userData,password:hashedPassword});
    let userObj=user.toObject()
    delete userObj.password
    res.status(200).json({
        msg:"user Created ",
        user:userObj
    })
    console.log(`user Created ${JSON.stringify(userObj)}`);
    
} catch (error) {
    res.status(500).send({
        error:error.message,
        msg:error.message
    });
    console.log(error.message);
    
}
}
export const logIn=async (req,res,next)=>{
    try {
        const userData={
            "email":req.body.email,
            "password":req.body.password
        }
        const user=await User.findOne({email:userData.email}).select({"+password":1})
        if(!user){
           return res.status(401).json({
                "msg":"Invalid Email",
            })
        }
        const isMatched=await bcrypt.compare(userData.password,user.password);
        if(isMatched){
console.log(`welcome ${user.username}`);
let User=user.toObject();
delete User.password;
res.status(200).json({
    "msg":"User LogedIn",
    "user":User
    
})

        }

        else{
            console.log(" password is not valid");
            return res.status(401).json({"msg":"Password invalid"});
            
        }
    } catch (error) {
       console.log(error.message);
       res.status(500).send(error.message)
        
    }
}