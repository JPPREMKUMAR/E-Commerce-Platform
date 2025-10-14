
import { useState, useContext, useEffect } from "react"
import { viewIcon, hideIcon } from "../assets/assets"
import { Link } from "react-router-dom"
import { MainContext } from "../context/MainContext"
import axios from "axios"
import { TailSpin } from 'react-loader-spinner'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom"

const SignUp = () => {


    const { backendUrl, setToken, token } = useContext(MainContext)

    const [isHide, setIsHide] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()


    const onSubmitForm = async (event) => {
        event.preventDefault()
        //console.log(name, email, password)
        setIsLoading(true)

        if (name !== '' && email !== '' && password.length >= 8) {

            console.log(name, email, password)

            const userData = { name, email, password }

            const response = await axios.post(backendUrl + "/api/user/signup", userData)

            console.log(response.data)
            if (response.data.success === true) {
                const token = response.data.token
                setToken(token)
                navigate("/")
                Cookies.set("token", token, { expires: 30 })


                setIsLoading(false)


            } else {
                setIsLoading(false)

            }


        } else {
            console.log("new", name, email, password)
        }
    }


    useEffect(() => {
        if (token !== undefined && token !== '') {
            navigate("/")

        }

    }, [])


    return (
        <div className="bg-gray-100 min-h-screen  flex justify-center p-10">

            <form onSubmit={onSubmitForm} className="px-5 py-2 rounded-md shadow-md bg-white p-10 ">
                <div className="mt-3 w-[400px]">
                    <h1 className="text-gray-700 text-[20px] font-bold">SignUp </h1>
                </div>
                <div className="flex flex-col gap-y-2 my-5">
                    <label className="text-gray-800 text-sm font-bold" htmlFor="name">Your Name</label>
                    <div className="border border-gray-200 px-4 py-2">
                        <input className="w-full py-1 outline-none" id="name" type="text" placeholder="Enter Your Full Name" required value={name} onChange={(event) => setName(event.target.value)} />
                    </div>

                </div>
                <div className="flex flex-col gap-y-2 my-5">
                    <label className="text-gray-800 text-sm font-bold" htmlFor="email">Email Address</label>
                    <div className="border border-gray-200 px-4 py-2">
                        <input className="w-full py-1 outline-none" id="email" type="email" placeholder="Enter Your Email" required value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>

                </div>
                <div className="flex flex-col gap-y-2 my-5">
                    <div className="flex justify-between items-center">
                        <label className="text-gray-800 text-sm font-bold" htmlFor="password">Password</label>
                        {
                            isHide ? <div className="flex items-center gap-x-2 cursor-pointer" onClick={() => (setIsHide(!isHide))}>
                                <img alt="show" src={viewIcon} className="w-4 h-4" />
                                <p className="text-xs ">Show</p>
                            </div> : <div className="flex items-center gap-x-2 cursor-pointer" onClick={() => (setIsHide(!isHide))}>
                                <img alt="hide" src={hideIcon} className="w-4 h-4" />
                                <p className="text-xs ">Hide</p>
                            </div>

                        }
                    </div>

                    <div className="border border-gray-200 px-4 py-2">
                        <input className="w-full py-1 outline-none" id="Password" type={isHide ? 'text' : 'password'} placeholder="Enter Your Password" required value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <p className="text-gray-700 text-sm">Use 8 or more characters.</p>
                </div>

                <div className="mt-5 mb-10">

                    <div className="flex gap-x-4 items-center">
                        <button type="submit" className="bg-blue-500  text-white  rounded-md shadow-md outline-none px-10 py-3">SignUp</button>
                        {

                            isLoading && <div>
                                <TailSpin color="red" width={30} height={30} />
                            </div>
                        }
                    </div>
                    <div className="my-3">
                        <p className="text-gray-700 text-sm">Already  have an account? <Link to="/login" className="border-b ml-1 cursor-pointer hover:text-blue-600">Login</Link></p>
                    </div>
                </div>



            </form>



        </div>
    )
}


export default SignUp