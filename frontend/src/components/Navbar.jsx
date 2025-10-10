
import { menuIcon, logo, wishlistIcon, cartIcon } from "../assets/assets"


const Navbar = () => {

    return (

        <div className="p-5 ">

            <div>
                <div className="flex justify-between items-center gap-x-2 ">
                    <div className="flex items-center gap-x-4">

                        <div>
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
        </div>
    )
}



export default Navbar