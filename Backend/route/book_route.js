import express from "express"
import { getBook, setBook } from "../Controller/book_controller.js";

 /* */

const router =express.Router()
router.get("/",getBook)
router.post("/",setBook)
export default router;