import { userProfile } from "../assets/assets"
import ProfileMenu from "../components/ProfileMenu"
import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/MainContext"
import { v4 as uuid } from "uuid"
import { profileDetailsImg, wishlistDetails, orderDetails, couponsDetails, cardDetails, addressDetails } from "../assets/assets"
import Cookies from "js-cookie"


const Dashboard = () => {

    const { navigate, profileDetails, token, setToken } = useContext(MainContext)
    console.log(profileDetails)
    const { name, email } = profileDetails


    const dashboardCategories = [
        { id: uuid(), name: "Profile", image: profileDetailsImg, url: "/my/profile" },
        { id: uuid(), name: "Orders", image: orderDetails, url: "/my/orders" },
        { id: uuid(), name: "Wishlist", image: wishlistDetails, url: "/wishlist" },
        { id: uuid(), name: "Addresses", image: addressDetails, url: "/my/address" },
        { id: uuid(), name: "Coupons", image: couponsDetails, url: "/my/coupons" },
        { id: uuid(), name: "SavedCards", image: cardDetails, url: "/my/saved-cards" }
    ]


    const navigateThis = (url) => {
        navigate(url)
    }

    const onLogout = () => {
        navigate("/login")
        Cookies.remove("token")
        setToken("")

    }

    useEffect(() => {
        console.log("Logout")
    }, [token])


    return (
        <div>
            <ProfileMenu active={'Dashboard'}  >
                <div >
                    {/* Profile Details */}
                    <div className="bg-gray-100 m-3 rounded-lg shadow-lg p-10 sm:flex">
                        <div>
                            <img src={userProfile} alt="profile Image" className="bg-transparent w-20 h-20 sm:w-50 sm:h-50" />
                        </div>
                        <div className="flex justify-between items-center w-full sm:px-10 my-10 sm:gap-y-5">

                            <div>
                                <h1 className="text-md text-gray-500 my-2 font-semibold">Email: <span className="text-black">{email}</span></h1>
                                <h1 className="text-md text-gray-500 my-2 font-semibold">Name: <span className="text-black">{name}</span></h1>
                            </div>


                            <button className="border border-gray-600 w-30 h-10 text-sm outline-none cursor-pointer rounded-md">EDIT PROFILE</button>



                        </div>
                    </div>
                    {/* List Of Categories */}
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10 m-3 my-10">
                        {
                            dashboardCategories.map((item) => (
                                <div key={item.id} className="flex flex-col justify-center items-center border border-gray-300 rounded-lg px-10 py-10 cursor-pointer" onClick={() => navigateThis(item.url)} >

                                    <img src={item.image} alt={item.name} className="max-w-[30px]" />
                                    <p className="text-gray-700 text-md font-semibold my-2">{item.name}</p>
                                </div>

                            ))

                        }

                    </ul>


                    <div className="my-10">
                        <button className="text-white bg-red-500  rounded-lg px-10 py-3 m-3 text-md cursor-pointer hover:bg-red-600" onClick={onLogout}>

                            Logout
                        </button>

                    </div>

                </div>

            </ProfileMenu >
        </div >
    )
}


export default Dashboard