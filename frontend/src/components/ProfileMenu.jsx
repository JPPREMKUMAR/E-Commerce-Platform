
import { useEffect, useContext, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { MainContext } from "../context/MainContext"

const ProfileMenu = (props) => {

    const { active } = props
    console.log(active)

    const { backendUrl, navigate, token, setToken, profileDetails, } = useContext(MainContext)

    const { name } = profileDetails



    return (
        <div>


            <div className="my-10 mx-30 ">

                {/* Account Details  */}

                <div>
                    <h1 className="text-lg font-bold">Account</h1>
                    <p className="text-gray-600 text-sm  ">{name}</p>

                </div>
                <hr className="text-gray-400 mt-4" />


                <div className="flex w-full h-full ">
                    {/* Side Bar */}
                    <div className="w-[15%] border-r border-gray-400 p-4 flex flex-col">

                        <div>

                            <h1 className={`text-[16px] font-semibold mb-3 cursor-pointer ${active === 'Dashboard' ? 'text-blue-500 font-bold' : 'text-gray-600'}`} onClick={() => navigate("/my/dashboard")}>OverView</h1>

                            <hr className="text-gray-400 my-5" />
                        </div>

                        <div className="flex flex-col">
                            <h1 className="text-[14px] text-gray-600 mb-3">ORDERS</h1>

                            <p className={`text-[14px]  font-semibold  mb-3 cursor-pointer ${active === 'Orders' ? 'text-blue-500 font-bold' : 'text-gray-600'}`} onClick={() => navigate("/my/orders")}>Orders & Returns</p>

                            <hr className="text-gray-400 my-5" />
                        </div>
                        <div className="flex flex-col  ">
                            <h1 className="text-[14px] text-gray-600 mb-3">COUPONS</h1>
                            <p className={`text-[14px]  font-semibold  mb-3 cursor-pointer ${active === 'Coupons' ? 'text-blue-500 font-bold' : 'text-gray-600'}`} onClick={() => navigate("/my/coupons")} >Coupons</p>

                            <hr className="text-gray-400 my-5" />
                        </div>
                        <div className="flex flex-col  ">
                            <h1 className="text-[14px] text-gray-600 mb-3">ACCOUNT</h1>

                            <p className={`text-[14px]  font-semibold  mb-3 cursor-pointer ${active === 'Profile' ? 'text-blue-500 font-bold' : 'text-gray-600'}`} onClick={() => navigate("/my/profile")} >Profile</p>

                            <p className={`text-[14px]  font-semibold  mb-3 cursor-pointer ${active === 'SavedCards' ? 'text-blue-500 font-bold' : 'text-gray-600'}`} onClick={() => navigate("/my/saved-cards")}>Saved Cards</p>



                            <p className={`text-[14px]  font-semibold  mb-3 cursor-pointer ${active === 'SavedVpa' ? 'text-blue-500 font-bold' : 'text-gray-600'}`} onClick={() => navigate("/my/saved-vpa")}>Saved VPA</p>



                            <p className={`text-[14px]  font-semibold  mb-3 cursor-pointer ${active === 'Address' ? 'text-blue-500 font-bold' : 'text-gray-600'}`} onClick={() => navigate("/my/address")} >Saved Address</p>



                            <p className={`text-[14px]  font-semibold  mb-3 cursor-pointer ${active === 'DeleteAccount' ? 'text-blue-500 font-bold' : 'text-gray-600'}`} onClick={() => navigate("/my/delete-account")} >Delete Account</p>

                            <hr className="text-gray-400 my-5" />

                        </div>
                        <div className="flex flex-col  ">
                            <h1 className="text-[14px] text-gray-600 mb-3">LEGAL</h1>
                            <p className="text-gray-800 text-sm my-1" >Term of use</p>
                            <p className="text-gray-800 text-sm my-1" >Privacy center</p>
                        </div>




                    </div>

                    <div className="w-[85%] px-5 py-3">
                        {props.children}
                    </div>

                </div>

            </div>

        </div>
    )
}


export default ProfileMenu