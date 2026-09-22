import jwt from "jsonwebtoken"

export const accessToken=async(payload)=>{
  try{
return await jwt.sign({id:payload._id,email:payload.email},process.env.ACCESS_SECRET,{expiresIn:"15s"})
  }catch(error){
console.log(error)
  }
  
}


export const refreshToken=async(payload)=>{
  try{
 return await jwt.sign({id:payload._id,email:payload.email},process.env.REFRESH_SECRET,{expiresIn:"15d"})
  }catch(error){
  console.log(error)
  }
 

}