import { userProfile } from "../assets/assets"
import ProfileMenu from "../components/ProfileMenu"
import { useContext, useState } from "react"
import { MainContext } from "../context/MainContext"

const Dashboard = () => {

    const { navigate, profileDetails } = useContext(MainContext)
    console.log(profileDetails)
    const { name, email } = profileDetails

    return (
        <div>
            <ProfileMenu active={'Dashboard'}  >
                <div>
                    {/* Profile Details */}
                    <div className="bg-gray-100 m-3 rounded-lg shadow-lg p-10 flex">
                        <div>
                            <img src={userProfile} alt="profile Image" className="bg-transparent w-50 h-50" />
                        </div>
                        <div className="flex justify-between items-center w-full px-10">

                            <div>
                                <h1 className="text-md text-gray-500 font-semibold">Email: <span className="text-black">{email}</span></h1>
                                <h1 className="text-md text-gray-500 font-semibold">Name: <span className="text-black">{name}</span></h1>
                            </div>


                            <button className="border border-gray-600 outline-none cursor-pointer px-4 py-2 rounded-md">EDIT PROFILE</button>



                        </div>
                    </div>
                </div>

            </ProfileMenu>
        </div>
    )
}


export default Dashboard