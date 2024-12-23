import express from "express"
import 'dotenv/config'
import "./Config/db.js"
import cors from "cors"
import bookRoute from "./route/book_route.js"
import userRoute from "./route/user_route.js"
const app = express()
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT || 3000;

app.use("/api/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log(
        `listening on port no ${PORT}`
    );
    
})