import {Router} from "express"
import {productpage, createproduct, updateproduct, deleteproduct,} from "../controllers/productController.js"
const productRoutes=Router()

productRoutes.get("/",productpage)

productRoutes.post("/create",createproduct)
productRoutes.put("/update",updateproduct)
productRoutes.delete("/delete",deleteproduct)

export default productRoutes