import {Router} from "express"
import {login, signup, logout} from "../controllers/authController.js"
const authRoutes=Router()



authRoutes.post("/login",login)
authRoutes.post("/signup",signup)
authRoutes.post("/logout",logout)


export default authRoutes