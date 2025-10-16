
import { useContext } from "react"
import ProfileMenu from "../components/ProfileMenu"
import { MainContext } from "../context/MainContext"

const EditProfile = () => {


    const { profileDetails } = useContext(MainContext)
    const { number, email, name, gender, location, alternateNumber, dateOfBirth } = profileDetails
    ///api/user/profileEdit 





    const onSubmitForm = (event) => {

        event.preventDefault()
    }



    return (
        <div>
            <ProfileMenu active={'Profile'}  >
                <div className="border border-gray-300 py-10 px-30 shadow-lg">


                    <h1 className="text-2xl font-semibold text-gray-900">Edit Profile</h1>
                    <form className="flex flex-col gap-y-5 my-10 " onSubmit={onSubmitForm}>

                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Your Email</h1>
                            <div className="border border-gray-300 py-5 px-5 ">
                                <h1 className="text-xl text-gray-600">{email}</h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Your Full Name</h1>
                            <div className="border border-gray-300 py-5 px-5 ">
                                <input value={name} placeholder="Enter Your Full Name" className="text-xl text-gray-600 w-full outline-none" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Your Number</h1>
                            <div className="border border-gray-300 py-5 px-5 ">
                                <input value={number} placeholder="Enter Your Number" className="text-xl text-gray-600 w-full outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Alternate Number</h1>
                            <div className="border border-gray-300 py-5 px-5 ">
                                <input value={alternateNumber} placeholder="Enter Your Alternate Number" className="text-xl text-gray-600 w-full outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Your Location</h1>
                            <div className="border border-gray-300 py-5 px-5 ">
                                <input value={location} placeholder="Enter Your City" className="text-xl text-gray-600 w-full outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Gender</h1>
                            <div className="flex gap-x-10">
                                <div className="w-40 border flex justify-center items-center py-4 px-2 bg-gray-200 ">
                                    <p className="text-black text-xl font-bold text-blue-500 cursor-pointer">Male</p>
                                </div>
                                <div className="w-40 border flex justify-center items-center py-4 px-2">
                                    <p className="text-black text-xl font-bold text-blue-500 cursor-pointer">Female</p>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Your Date Of Birth</h1>
                            <div className="border border-gray-300 py-5 px-5 ">
                                <input value={dateOfBirth} placeholder="Enter Your Date Of Birth DD/MM/YYYY" className="text-xl text-gray-600 w-full outline-none" />
                            </div>
                        </div>

                        <div className="my-10 " >
                            <button type="submit" className="bg-red-500 text-white px-7 py-3 text-xl  hover:bg-red-600 rounded-md outline-none cursor-pointer ">
                                Save Details
                            </button>
                        </div>
                    </form>

                </div>

            </ProfileMenu>
        </div>
    )
}


export default EditProfile