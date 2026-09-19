import e from "express"
import productModel from "../models/productModel.js"

export const productpage=async(req,res)=>{
    try{
        const products = await productModel.find()
        res.status(200).json({data:products})
    } catch (error) {
    res.status(500).json({msg:"db not available"})
    }
    res.end("product page")
}

export const createproduct=async(req,res)=>{
    try{
    const product= new productModel(req.body)
    await product.save()
    res.status(201).json({msg:"product created!!"})
    }catch (error) {
    res.status(500).json({msg:"validation failed",reason:e})
    }
}
export const deleteproduct=(req,res)=>{
    res.end("product delete page")
}
export const updateproduct=(req,res)=>{
    res.end("product update page")
}
