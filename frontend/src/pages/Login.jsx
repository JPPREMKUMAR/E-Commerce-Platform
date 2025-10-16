
import { useState, useContext, useEffect } from "react"
import { viewIcon, hideIcon } from "../assets/assets"
import { Link } from "react-router-dom"
import { MainContext } from "../context/MainContext"
import { TailSpin } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Cookies from 'js-cookie'

const Login = () => {

    const { backendUrl, setToken, token } = useContext(MainContext)

    const navigate = useNavigate()

    const [isHide, setIsHide] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')




    useEffect(() => {
        if (token !== undefined && token !== '') {
            navigate("/")

        }

    }, [])


    const onSubmitForm = async (event) => {
        event.preventDefault()
        setIsLoading(true)



        const response = await axios.post(backendUrl + "/api/user/login", { email, password })
        console.log(response.data)

        if (response.data.success === true) {
            setIsLoading(false)
            const token = response.data.token
            Cookies.set("token", token, { expires: 30 })
            setToken(token)
            navigate("/")
            setError('')

        } else {
            setIsLoading(false)
            setError(response.data.message)


        }



    }
    return (
        <div className="bg-gray-100 min-h-screen  flex justify-center p-10">

            <form onSubmit={onSubmitForm} className="px-5 py-2 rounded-md shadow-md bg-white p-10 h-[450px]">
                <div className="mt-3 w-[400px]">
                    <h1 className="text-gray-700 text-[20px] font-bold">Login </h1>
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


                </div>


                <div className="mb-10 my-8">

                    <div className="flex items-center gap-x-4">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white  rounded-md shadow-md outline-none px-10 py-3">Login</button>

                        {
                            isLoading && <div>

                                <TailSpin color="red" width={30} height={30} />
                            </div>

                        }
                    </div>
                    <div className="my-3">
                        <p className="text-gray-700 text-sm">Don't have an account? <Link to="/signup" className="border-b ml-1 cursor-pointer hover:text-blue-600">SignUp</Link></p>
                    </div>
                </div>

                {

                    error.length !== "" && <p className="text-red-500 text-md font-bold">{error}</p>
                }

            </form>

        </div>
    )
}


export default Login