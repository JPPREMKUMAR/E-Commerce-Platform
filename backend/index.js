import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()


import connectDb from "./config/db.js"
import userRouter from "./routes/userRoutes.js"
const app = express()



// Middleware 


app.use(express.json())
app.use(cors())


//Connect Db
await connectDb()


// Routes 
app.get("/", (req, res) => {

    res.send("Api Working")

})

// User Routes 

app.use("/api/user", userRouter)




const PORT = process.env.PORT || 3000

// Start Server

app.listen(PORT, () => {
    console.log(`server Working on ${PORT}`)

})