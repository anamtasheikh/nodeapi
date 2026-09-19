import {Schema,model} from "mongoose";


 const productSchema= new Schema({
    productName:String,
    productQuantity:String,
    productPrice:String,
    productDescription:String
 })

 const productModel=model("products",productSchema)
 export default productModel