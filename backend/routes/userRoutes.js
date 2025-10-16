


import express from "express"
import { signUpUser, logInUser, userProfile, updateUserProfile } from "../controllers/userController.js"
import authUser from "../middleware/authUser.js"


const userRouter = express.Router()


// SignUp User 

userRouter.post("/signup", signUpUser)

// Login User 
userRouter.post("/login", logInUser)


// User Profile 

userRouter.post("/profileDetails", authUser, userProfile)

// User Profile Edit 

userRouter.post("/profileEdit", authUser, updateUserProfile)


export default userRouter