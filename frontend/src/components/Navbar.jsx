import { Link } from "react-router-dom"
import { menuIcon, logo, wishlistIcon, cartIcon, searchIcon, profileIcon } from "../assets/assets"
import { useState, useContext, useEffect } from "react"
import CategoryList from "../components/CategoryList"
import { MainContext } from "../context/MainContext"
import Cookies from "js-cookie"
import axios from "axios"



const Navbar = () => {



    const [isActive, setIsActive] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    console.log(name, email)



    const { menCategoriesList,
        womenCategoriesList,
        kidsCategoriesList,
        homeCategoriesList,
        token,
        navigate, backendUrl, setToken
    } = useContext(MainContext)


    //console.log(token)



    const onLogout = () => {
        navigate("/login")
        Cookies.remove("token")
        setToken("")

    }



    const getProfileDetails = async () => {

        //console.log(token)
        if (token !== '' && token !== undefined) {

            const response = await axios.post(backendUrl + "/api/user/profileDetails", {}, { headers: { token: token } })
            //console.log(response.data.profileDetails)
            const userProfile = response.data.profileDetails
            console.log(userProfile)
            const userEmail = userProfile.email
            const userName = userProfile.name
            setEmail(userEmail)
            setName(userName)
        }

    }
    useEffect(() => {
        getProfileDetails()
    }, [name, email, token])



    return (

        <div className="position:fixed">

            <div>
                <div className="flex justify-between items-center gap-x-2 sm:hidden">
                    <div className="flex items-center gap-x-4">

                        <div className="">
                            <img src={menuIcon} alt="Menu" className="w-7 h-10" />
                        </div>
                        <div>
                            <img src={logo} alt="Logo" className="w-14 h-14" />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div>
                            <img src={wishlistIcon} alt="Wishlist" className="w-6 h-6" />
                        </div>
                        <div>
                            <img src={cartIcon} alt="Bag" className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>

            {/* MD & LG Devices */}
            <div className="hidden sm:block border border-b border-gray-200 m-0 w-full px-10">
                {/* Part 1 Logo & Categories */}
                <div className="flex items-center">
                    <div className="pr-5 cursor-pointer">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="w-36 h-20 " />
                        </Link>
                    </div>
                    <div className="group relative ">
                        <div className='hover:border-b-4 hover:border-red-400 p-5 h-[65px] cursor-pointer'>
                            <Link to="/shop/men" className="text-gray-800 text-xs font-bold  ">MEN</Link>
                        </div>
                        {/* Dropup Down Menu */}
                        <div className="px-5 hidden group-hover:block absolute top-full py-5 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all rounded-md min-w-[1100px] h-[450px] ">
                            <div className="flex  flex-wrap gap-x-5 gap-y-5  h-auto ">

                                {
                                    menCategoriesList.map((item, index) => (

                                        <CategoryList itemsList={item} key={index} />

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="group relative ">
                        <div className='hover:border-b-4 hover:border-orange-400 p-5 h-[65px] cursor-pointer'>
                            <Link to="/shop/women" className="text-gray-800 text-xs font-bold  ">WOMEN</Link>
                        </div>
                        {/* Dropup Down Menu */}
                        <div className="px-5 hidden group-hover:block absolute top-full left-0  py-5 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all rounded-md min-w-[1100px] h-[450px]  ">
                            <div className="flex  flex-wrap gap-x-5 gap-y-5   h-auto ">

                                {
                                    womenCategoriesList.map((item, index) => (

                                        <CategoryList itemsList={item} key={index} />

                                    ))
                                }
                            </div>
                        </div>
                    </div>


                    <div className="group relative ">
                        <div className='hover:border-b-4 hover:border-pink-400 p-5 h-[65px] cursor-pointer'>
                            <Link to="/shop/kids" className="text-gray-800 text-xs font-bold  ">KIDS</Link>
                        </div>
                        {/* Dropup Down Menu */}
                        <div className="px-5 hidden group-hover:block absolute top-full left-1 rigth-1 py-5 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all rounded-md  w-[1000px] h-[450px] ">
                            <div className="flex   flex-wrap gap-x-5 gap-y-5  h-auto ">

                                {
                                    kidsCategoriesList.map((item, index) => (

                                        <CategoryList itemsList={item} key={index} />

                                    ))
                                }
                            </div>
                        </div>
                    </div>


                    <div className="group relative ">
                        <div className='hover:border-b-4 hover:border-yellow-400 p-5 h-[65px] cursor-pointer'>
                            <Link to="/shop/home-living" className="text-gray-800 text-xs font-bold  ">HOME</Link>
                        </div>
                        {/* Dropup Down Menu */}
                        <div className="px-5 hidden group-hover:block absolute top-full left-1 rigth-1 py-5 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all rounded-md  w-[950px] h-[450px] ">
                            <div className="flex flex-wrap gap-x-5 gap-y-5  h-auto ">

                                {
                                    homeCategoriesList.map((item, index) => (

                                        <CategoryList itemsList={item} key={index} />

                                    ))
                                }
                            </div>
                        </div>
                    </div>




                    {/* Part 2 */}

                    <div className="w-full px-10 mx- flex items-center pl-20 flex items-center justify-between">
                        <div className="max-w-3/4 border border-gray-200 rounded-sm px-3 py-2 flex items-center bg-gray-50 hover:bg-white text-gray-500" >
                            <img src={searchIcon} className="w-4 h-4 mr-2" />
                            <input placeholder="Search for products" className="max-w-full outline-none" />
                        </div>
                        <div className="max-w-1/4">
                            <div className="flex items-center">
                                <div className="relative group flex flex-col items-center justify-center">
                                    <div className="hover:border-b-4 p-2 hover:border-red-400 p-2 h-[65px] flex flex-col items-center justify-center  cursor-pointer">
                                        <img src={profileIcon} alt="Profil3" className="w-4 h-4" />
                                        <p className="text-[14px] mt-1">Profile</p>
                                    </div>
                                    {/*Drop Down Menu */}
                                    <div className="px-5 py-3 hidden group-hover:block absolute top-full py-5 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all rounded-md w-80">
                                        {
                                            token !== undefined && token !== '' ?
                                                <div onClick={() => navigate("/my/profile")} className="cursor-pointer">
                                                    <h1 className="text-gray-700 text-sm font-semibold">Hello {name}</h1>
                                                    <p className="text-sm text-gray-600">{email}</p>

                                                </div>

                                                : <div>
                                                    <h1 className="text-black text-sm  font-bold my-2">Welcome</h1>
                                                    <p className="text-sm text-gray-400 my-1">To access account and manage orders</p>
                                                    <button className="cursor-pointer my-2 text-blue-500 hover:text-white hover:bg-blue-500 border border-gray-200 rounded-md px-4 py-2 text-sm font-bold">
                                                        <Link to="/login">LOGIN / SIGNUP</Link>
                                                    </button>
                                                </div>

                                        }


                                        <hr className="text-gray-200 my-2" />
                                        <div className="flex flex-col gap-y-2">
                                            <Link to="/my/orders" className="text-sm text-gray-700  hover:font-bold cursor-pointer hover:text-black">Orders</Link>
                                            <Link to="/wishlist" className="text-sm text-gray-700  hover:font-bold  cursor-pointer hover:text-black">Wishlist</Link>
                                            <Link to="/wishlist" className="text-sm text-gray-700  hover:font-bold  cursor-pointer hover:text-black">Bag</Link>
                                            <Link to="/my/orders" className="text-sm text-gray-700  hover:font-bold  cursor-pointer hover:text-black">Contact Us</Link>
                                            <Link to="/my/coupons" className="text-sm text-gray-700   hover:font-bold cursor-pointer hover:text-black">Coupons</Link>
                                            <Link to="/my/saved-cards" className="text-sm text-gray-700   hover:font-bold  cursor-pointer hover:text-black">Saved Cards</Link>
                                            <Link to="/my/saved-vpa" className="text-sm text-gray-700   hover:font-bold  cursor-pointer hover:text-black">Saved VPA</Link>
                                            <Link to="/my/address" className="text-sm text-gray-700   hover:font-bold  cursor-pointer hover:text-black">Saved Addresses</Link>
                                        </div>

                                        {
                                            token !== undefined && token !== '' && <div className="flex flex-col gap-y-2">
                                                <hr className="text-gray-200 my-2" />
                                                <Link to="/my/profile/edit" className="text-sm text-gray-700  hover:font-bold cursor-pointer hover:text-black">Edit</Link>
                                                <p onClick={onLogout} className="text-sm text-gray-700  hover:font-bold  cursor-pointer hover:text-black pl-0 ">Logout</p>
                                            </div>

                                        }

                                    </div>

                                </div>
                                <div >

                                    <Link to="/wishlist" className="p-4 flex flex-col items-center justify-center  cursor-pointer">
                                        <img src={wishlistIcon} alt="Wishlist" className="w-5 h-5" />
                                        <p className="text-[14px] mt-1">Wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/checkout/cart" className="p-4 flex flex-col items-center justify-center  cursor-pointer">
                                        <img src={cartIcon} alt="Bag" className="w-5 h-5" />
                                        <p className="text-[14px] mt-1">Bag</p>
                                    </Link>
                                </div>
                            </div>

                        </div>


                    </div>



                </div>

            </div>


        </div>
    )
}



export default Navbar