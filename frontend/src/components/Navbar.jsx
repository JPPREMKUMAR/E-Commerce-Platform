import { Link } from "react-router-dom"
import { menuIcon, logo, wishlistIcon, cartIcon, searchIcon } from "../assets/assets"


const Navbar = () => {

    return (

        <div className=" ">

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
                    <div className="pr-5">
                        <img src={logo} alt="Logo" className="w-20 h-20 " />
                    </div>
                    <div className="hover:border-b-4 hover:border-red-400 p-5 h-[65px]">
                        <Link to="/shop/men" className="text-gray-800 text-xs font-bold  ">MEN</Link>
                    </div>
                    <div className="hover:border-b-4 hover:border-orange-400 p-5 h-[65px]">
                        <Link to="/shop/women" className="text-gray-800 text-xs font-bold ">WOMEN</Link>
                    </div>
                    <div className="hover:border-b-4 hover:border-pink-400 p-5 h-[65px]">
                        <Link to="/shop/kids" className="text-gray-800 text-xs font-bold ">KIDS</Link>
                    </div>
                    <div className="hover:border-b-4 hover:border-yellow-400 p-5 h-[65px]">
                        <Link to="/shop/home-living" className="text-gray-800 text-xs font-bold ">HOME</Link>
                    </div>
                    <div className="hover:border-b-4 hover:border-blue-400 p-5 h-[65px]">
                        <Link to="/personal-care" className="text-gray-800 text-xs font-bold ">BEAUTY</Link>
                    </div>
                    <div className="hover:border-b-4 hover:border-green-400 p-5 h-[65px]">
                        <Link to="/genz-both" className="text-gray-800 text-xs font-bold ">GENZ</Link>
                    </div>


                    {/* Part 2 */}

                    <div className="flex items-center px-10">
                        <div className="border border-gray-200 rounded-sm px-3 py-2 flex items-center bg-gray-50 hover:bg-white text-gray-500" >
                            <img src={searchIcon} className="w-4 h-4 mr-2" />
                            <input placeholder="Search for products" className="w-full outline-none" />
                        </div>
                        <div>
                            ICons
                        </div>

                    </div>


                </div>




            </div>
        </div>
    )
}



export default Navbar