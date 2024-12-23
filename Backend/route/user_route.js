import express from "express"
import {signUp ,logIn} from "../Controller/user_controller.js"
const router=express.Router()
router.post("/api/signup",signUp)
router.post("/api/login",logIn)
export default router;