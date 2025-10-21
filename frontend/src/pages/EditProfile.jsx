
import { useContext, useState, useEffect } from "react"
import ProfileMenu from "../components/ProfileMenu"
import { MainContext } from "../context/MainContext"

import axios from "axios"


const EditProfile = () => {


    const { profileDetails, navigate, token, backendUrl } = useContext(MainContext)
    const { number, email, name, gender, location, alternateNumber, dateOfBirth } = profileDetails
    ///api/user/profileEdit 

    const [updateName, setUpdatedName] = useState('')
    const [updatedNumber, setUpdatedNumber] = useState('')
    const [updateGender, setUpdatedGender] = useState('M')
    const [updatedLocation, setUpdatedLocation] = useState('')
    const [updatedAlternateNumber, setUpdatedAlternateNumber] = useState('')
    const [upadatedDateOfBirth, setUpdatedDateOfBirth] = useState('')

    const [error, setError] = useState('')

    useEffect(() => {
        setUpdatedName(name !== undefined ? name : '')
        setUpdatedNumber(number !== undefined ? number : '')
        setUpdatedLocation(location !== undefined ? location : '')
        setUpdatedAlternateNumber(alternateNumber !== undefined ? alternateNumber : '')
        setUpdatedGender(gender !== undefined ? gender : "Male")
        setUpdatedDateOfBirth(dateOfBirth !== undefined ? dateOfBirth : '')



    }, [name, number, location, alternateNumber, dateOfBirth])

    const onSubmitForm = async (event) => {
        event.preventDefault()
        if (updatedNumber !== '' && updateName !== '' && updateGender !== '' && updatedLocation !== '' && updatedAlternateNumber !== '' && upadatedDateOfBirth !== '') {

            console.log(backendUrl)

            const response = await axios.post(backendUrl + "/api/user/profileEdit", {

                name: updateName, number: updatedNumber, location: updatedLocation, alternateNumber: updatedAlternateNumber, dateOfBirth: upadatedDateOfBirth, gender: updateGender
            }, { headers: { token } })
            console.log(response)
            console.log(response.data)

            setError('')
            navigate("/my/profile")





        } else {
            setError("Plese Fill All Details")
        }
    }


    const onChangeGender = () => {
        console.log("button Clicked")
        if (updateGender === "Male") {
            setUpdatedGender("Female")
        } else {
            setUpdatedGender("Male")
        }


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
                                <h1 className="text-xl text-gray-600">{name}</h1>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Your Number</h1>
                            <div className="border border-gray-300 py-5 px-5 ">
                                <input value={updatedNumber} onChange={(event) => setUpdatedNumber(event.target.value)} placeholder="Enter Your Number" className="text-xl text-gray-600 w-full outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Alternate Number</h1>
                            <div className="border border-gray-300 py-5 px-5 ">
                                <input value={updatedAlternateNumber} onChange={(event) => setUpdatedAlternateNumber(event.target.value)} placeholder="Enter Your Alternate Number" className="text-xl text-gray-600 w-full outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Your Location</h1>
                            <div className="border border-gray-300 py-5 px-5 ">
                                <input value={updatedLocation} onChange={(event) => setUpdatedLocation(event.target.value)} placeholder="Enter Your City" className="text-xl text-gray-600 w-full outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Gender</h1>
                            <div className="flex gap-x-10">
                                <button type="button" className={`w-40 border flex justify-center items-center py-4 px-2 ${updateGender === "Male" && 'bg-gray-200'} `} onClick={onChangeGender}>
                                    <p className="text-black text-xl font-bold text-blue-500 cursor-pointer">Male</p>
                                </button>
                                <button type="button" className={`w-40 border flex justify-center items-center py-4 px-2 ${updateGender === "Female" && 'bg-gray-200'} `} onClick={onChangeGender}>
                                    <p className="text-black text-xl font-bold text-blue-500 cursor-pointer">Female</p>
                                </button>

                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <h1 className="px-3 my-1 text-xl ">Your Date Of Birth</h1>
                            <div className="border border-gray-300 py-5 px-5 ">
                                <input value={upadatedDateOfBirth} onChange={(event) => setUpdatedDateOfBirth(event.target.value)} placeholder="Enter Your Date Of Birth DD/MM/YYYY" className="text-xl text-gray-600 w-full outline-none" />
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