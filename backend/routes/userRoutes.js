


import express from "express"
import { signUpUser, logInUser, userProfile } from "../controllers/userController.js"
import authUser from "../middleware/authUser.js"


const userRouter = express.Router()


// SignUp User 

userRouter.post("/signup", signUpUser)

// Login User 
userRouter.post("/login", logInUser)


// User Profile 

userRouter.post("/profileDetails", authUser, userProfile)


export default userRouter