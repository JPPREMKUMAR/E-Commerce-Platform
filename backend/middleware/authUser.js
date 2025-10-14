
import User from "../models/User.js"
import jwt from "jsonwebtoken"



const authUser = async (req, res, next) => {

    try {
        const { token } = req.headers
        //console.log(token)

        if (token !== undefined) {

            const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
            // console.log(payload)

            req.userDetails = { id: payload.id, email: payload.email }




            next()
        } else {

            return res.json({ success: false, message: "Invalid Credentials." })

        }






    } catch (error) {

        return res.json({ success: false, error })
    }

}



export default authUser