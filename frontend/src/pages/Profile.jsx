
import ProfileMenu from "../components/ProfileMenu"
import { MainContext } from "../context/MainContext"
import { useContext } from "react"
const Profile = () => {
    const { profileDetails, navigate } = useContext(MainContext)
    console.log(profileDetails)

    const { name, email, number, alternateNumber, dateOfBirth, gender, location } = profileDetails

    const toNavigate = (url) => {

        navigate(url)
    }

    return (
        <div>
            <ProfileMenu active={'Profile'}  >
                <div className="border border-gray-300 py-10 px-30 shadow-lg">


                    <div className="flex justify-center">

                        <div className="w-2/3">
                            <h1 className="text-4xl font-bold ">Profile Information</h1>
                            <hr className="text-gray-500 my-3" />
                            <div className="flex flex-col gap-x-5  gap-y-5 my-10">

                                <div className="flex">
                                    <h1 className="text-xl w-1/2 text-gray-900 font-semibold">Full Name</h1>
                                    <h1 className="text-xl text-gray-700 font-semibold">{name}</h1>
                                </div>
                                <div className="flex ">
                                    <h1 className="text-xl w-1/2 text-gray-900 font-semibold">Email Id</h1>
                                    <h1 className="text-xl text-gray-700 font-semibold">{email}</h1>
                                </div>
                                <div className="flex ">
                                    <h1 className="text-xl w-1/2 text-gray-900 font-semibold">Mobile Number</h1>
                                    <h1 className="text-xl text-gray-700 font-semibold">{number === null ? "Not Added" : number}</h1>
                                </div>
                                <div className="flex ">
                                    <h1 className="text-xl w-1/2 text-gray-900 font-semibold">Gender</h1>
                                    <h1 className="text-xl text-gray-700 font-semibold">{gender === "" ? "Not Added" : gender}</h1>
                                </div>

                                <div className="flex ">
                                    <h1 className="text-xl w-1/2 text-gray-900 font-semibold">Date Of Birth</h1>
                                    <h1 className="text-xl text-gray-700 font-semibold">{dateOfBirth === "" ? "Not Added" : dateOfBirth}</h1>
                                </div>
                                <div className="flex ">
                                    <h1 className="text-xl w-1/2 text-gray-900 font-semibold">Location</h1>
                                    <h1 className="text-xl text-gray-700 font-semibold">{location === "" ? "Not Added" : location}</h1>
                                </div>
                                <div className="flex ">
                                    <h1 className="text-xl w-1/2 text-gray-900 font-semibold">Alternate Number</h1>
                                    <h1 className="text-xl text-gray-700 font-semibold">{alternateNumber === "" ? "Not Added" : alternateNumber}</h1>
                                </div>
                                <div className="w-full my-5">
                                    <button className="text-white px-20 py-3 rounded-md bg-red-400 text-xl font-bold hover:bg-red-500" onClick={() => toNavigate("/my/profile/edit")}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </ProfileMenu>
        </div>
    )
}


export default Profile