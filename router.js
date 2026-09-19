import {Router} from "express"
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
// import productRoutes from "./routes/productRoutes.js"
const router=Router()
router.use("/user",userRoutes)
router.use("/auth",authRoutes)
// router.use("/product",productRoutes)

export default router