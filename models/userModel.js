import {Schema,model} from "mongoose";
import bcrypt from "bcryptjs";

const userSchema= new Schema({
    name:{
        type:String,
       
    },
    email:{
      type:  String,
    
      
    },
    password:String,
    contact:String,
    gender:{
      type:String,
    
    }

    
})

userSchema.pre("save",async function() {
const oldpass=this.password
this.password=await bcrypt.hash(oldpass,10)  

})


const userModel=model("users",userSchema)
export default userModel