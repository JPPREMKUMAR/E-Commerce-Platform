
import bcrypt from "bcrypt"
import User from "../models/User.js"
import jwt from "jsonwebtoken"
import { get } from "mongoose"

const jwtGenerate = (userDetails) => {
    //console.log("jwt Token")

    return jwt.sign(userDetails, process.env.JWT_SECRET_KEY)

}



export const signUpUser = async (req, res) => {


    try {

        const { name, email, password } = req.body

        // console.log(name, email, password)
        // Checking the User is Already Present
        const isUser = await User.findOne({ email: email })
        // console.log(isUser)
        if (isUser === null) {
            console.log(password.length)
            if (password.length >= 8) {
                const hashedPassword = await bcrypt.hash(password, 10)
                const newUser = new User({
                    name,
                    email,
                    password: hashedPassword

                })
                // console.log(newUser)
                await newUser.save()

                const userDetails = { id: newUser._id, email: newUser.email }

                const token = jwtGenerate(userDetails)

                return res.json({ success: true, message: "User Created.", token: token })

            } else {
                return res.json({ success: false, message: "Your password must be 8 or more characters." })

            }




        } else {
            return res.json({ success: false, message: "User have already an Account. " })

        }




    } catch (error) {



        //console.log(error)
        return res.json({ success: false, error })


    }


}



export const logInUser = async (req, res) => {

    try {
        const { email, password } = req.body
        //console.log(`email is ${email}`)
        //console.log(`password is ${password}`)

        const isUser = await User.findOne({ email })
        if (isUser === null) {

            return res.json({ success: false, message: 'Please use valid email.' })
        } else {

            const comparedPassword = isUser.password

            const isPasswordTrue = await bcrypt.compare(password, comparedPassword)
            //console.log(isPasswordTrue)

            if (isPasswordTrue === true) {

                const userDetails = { email: isUser.email, id: isUser._id.toString() }
                const token = jwtGenerate(userDetails)
                //console.log(token)
                res.json({ success: true, message: "Login Successful.", token: token })



            } else {

                return res.json({ success: false, message: "Please use valid password." })
            }



        }


    } catch (error) {

        return res.json({ success: false, error })
    }

}



export const userProfile = async (req, res) => {

    try {

        const { userDetails } = req
        //console.log(userDetails)
        const { id } = userDetails
        const getUser = await User.findOne({ _id: id }, { password: 0 })
        //console.log(getUser)
        return res.json({ success: true, profileDetails: getUser })


    } catch (error) {

        return res.json({ success: false, error })
    }


}


export const updateUserProfile = async (req, res) => {

    try {
        const { userDetails } = req
        const { id } = userDetails
        const { number, alternateNumber, dateOfBirth, location, gender } = req.body

        console.log(number, alternateNumber, dateOfBirth, location, gender)
        await User.updateOne({ _id: id }, { number, alternateNumber, dateOfBirth, location, gender })

        const userProfile = await User.findOne({ _id: id })


        res.json({ success: true, message: "Profile Details Updated.", userProfile })


    } catch (error) {

        console.log(error)
        return res.json({ success: false, error })
    }

}