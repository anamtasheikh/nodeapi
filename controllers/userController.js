
import userModel from "../models/userModel.js"

export const userpage=async (req,res)=>{
    try{
        const users = await userModel.find()
        res.status(200).json({data:users})
    } catch (error) {
    res.status(500).json({msg:"db not available"})
    }
  
}

export const showbyid=async(req,res)=>{
    try{
        const users = await productModel.findById(req.params.id)
        res.status(200).json({data:users})
    } catch (error) {
    res.status(500).json({msg:"db not available"})
    }
   
}

export const createpage=async(req,res)=>{
    try{
        const users= new userModel(req.body)
        // console.log(users)
    await users.save()
    res.status(201).json({msg:"user created!!"})
    }catch (error) {
    res.status(500).json({msg:"validation failed",reason:error})
    }
}

export const updatepage=async(req,res)=>{
    try{
         const users=await userModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({msg:"user updated",data:users})
    } catch(error){
     res.status(500).json("update error")
    }}
 

export const deletepage=async(req,res)=>{
    try{
      await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"user deleted"})
    }catch(error){

    }
}
8