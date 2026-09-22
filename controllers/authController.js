import userModel from "../models/userModel.js"
import bcrypt from "bcryptjs"
<<<<<<< Updated upstream
import jwt from "jsonwebtoken"
import{accessToken,refreshToken} from "../services/tokenService.js"
export const signup=async(req,res)=>{
   try{
    const match=await userModel.findOne({email:req.body.email})
    if(match){
       return res.status(409).json({msg:"email already exist"})
    }
    const user=new userModel(req.body)
    await user.save()
    res.status(201).json({msg:"user sign up!"})
=======
import { accessToken, refreshToken } from "../services/tokenService.js"


export const signup = async (req, res) => {
   try {
      const match = await userModel.findOne({ email: req.body.email })
      if (match) {
         return res.status(409).json({ msg: "email already exist" })
      }
      const user = new userModel(req.body)
      await user.save()
      res.status(201).json({ msg: "user sign up!" })
>>>>>>> Stashed changes
   } catch (error) {
      res.status(400).json({ msg: "server not available" })
   }
}




export const login = async (req, res) => {
   try {
      const user = await userModel.findOne({ email: req.body.email })
      if (!user) {
         return res.status(404).json({ msg: "invalid username" })
      }
      const frntpass = req.body.password
      const dbpass = user.password
      const match = await bcrypt.compare(frntpass, dbpass)

      if (!match) {
         return res.status(400).json({ msg: "invalid credential" })
      }
      const acc = await accessToken(user)
      const ref = await refreshToken(user)
      res.cookie("refToken", ref, { httponly: true })
      res.status(200).json({ msg: "login successfull", accessToken: acc })

   } catch (error) {
      res.status(400).json({ msg: "user not found" })
   }
}

<<<<<<< Updated upstream
export const refresh = async (req, res) =>{
    try {
           const ref = req.cookies.refToken
           const match  = jwt.verify(ref, process.env.REFRESH_SECRET)
           console.log(match)

           if(!match){
            return  res.status(400).json({msg:"invalid refresh token"})
           }
         
         const acc =  jwt.sign({id:
      match.id, email:match.email}, process.env.ACCESS_SECRET, {expiresIn:"15m"})

      res.status(200).json({msg : "new access token generated" , acc:accessToken})
        
    } catch (error) {
        res.status(400).json({msg:"cookie error"})
    }
}


export const logout=async(req,res)=>{
    try{
       
    }catch (error) {
       
    }
=======
export const refresh = async (req, res) => {
   try {
      const ref = req.cookies.refToken
      const match = jwt.verify(ref, process.env.REFRESH_SECRET)
      console.log(match)

      if (!match) {
         return res.status(400).json({ msg: "invalid refresh token" })
      }

      const acc = jwt.sign({
         id:
            match.id, email: match.email
      }, process.env.ACCESS_SECRET, { expiresIn: "15m" })

      res.status(200).json({ msg: "new access token generated", acc: accessToken })

   } catch (error) {
      res.status(400).json({ msg: "cookie error" })
   }
}


export const logout = async (req, res) => {
   try {
      res.clearCookie("refToken")
      res.status(200).json({ msg: "login Successfull" })

   } catch (error) {
      res.status(400).json({ msg: "Invalid Token" })
   }
>>>>>>> Stashed changes
}