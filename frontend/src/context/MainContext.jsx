import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { v4 as uuid } from "uuid"

import Cookies from 'js-cookie'


export const MainContext = createContext({})


const MainContextProvider = (props) => {

    const navigate = useNavigate()



    // Men Categories 

    const menCategoriesList = [
        {
            id: uuid(),
            name: "Topwear",
            color: "text-red-400",
            categoriesList: [
                { id: uuid(), name: "T-Shirts" },
                { id: uuid(), name: "Casual Shirts" },
                { id: uuid(), name: "Formal Shirts" },
                { id: uuid(), name: "Sweatshirts" },
                { id: uuid(), name: "Sweaters" },

            ]
        },
        {
            id: uuid(),
            name: "Bottomwear", color: "text-red-400",
            categoriesList: [
                { id: uuid(), name: "Jeans" },
                { id: uuid(), name: "Casual Trousers" },
                { id: uuid(), name: "Formal Trousers" },
                { id: uuid(), name: "Shorts" },
                { id: uuid(), name: "Track Pants & Joggers" }
            ]
        },
        {
            id: uuid(),
            name: "Footwear", color: "text-red-400",
            categoriesList: [
                { id: uuid(), name: "Casual Shoes" },
                { id: uuid(), name: "Formal Shoes" },
                { id: uuid(), name: "Sports Shoes" },
                { id: uuid(), name: "Sandals & Floaters" },
                { id: uuid(), name: "Flip Flops" }
            ]
        },
        {
            id: uuid(),
            name: "Indian & Festival Wear", color: "text-red-400",
            categoriesList: [
                { id: uuid(), name: "Kurtas & Kurta Sets" },
                { id: uuid(), name: "Sherwanis" },
                { id: uuid(), name: "Nehru Jackets" },
                { id: uuid(), name: "Dhotis" }
            ]
        },
        {
            id: uuid(),
            name: "Innerwear", color: "text-red-400",
            categoriesList: [
                { id: uuid(), name: "Vests" },
                { id: uuid(), name: "Briefs" },
                { id: uuid(), name: "Boxers" },
                { id: uuid(), name: "Trunks" },
                { id: uuid(), name: "Thermals" }
            ]
        },
        {
            id: uuid(),
            name: "Sports & Active Wear", color: "text-red-400",
            categoriesList: [
                { id: uuid(), name: "Tracksuits" },
                { id: uuid(), name: "Sports T-Shirts" },
                { id: uuid(), name: "Gym Shorts" },
                { id: uuid(), name: "Joggers" },
                { id: uuid(), name: "Sweatshirts" }
            ]
        }
    ]

    //Women Categories

    const womenCategoriesList = [
        {
            id: uuid(),
            name: "Indian & Fusion Wear",
            color: "text-orange-400",
            categoriesList: [
                { id: uuid(), name: "Kurtas & Suits" },
                { id: uuid(), name: "Kurtis, Tunics & Tops" },
                { id: uuid(), name: "Sarees" },
                { id: uuid(), name: "Ethnic Wear" },

            ]
        },
        {
            id: uuid(),
            name: "Western Wear",
            color: "text-orange-400",
            categoriesList: [
                { id: uuid(), name: "Dresses" },
                { id: uuid(), name: "Tops" },
                { id: uuid(), name: "Tshirts" },
                { id: uuid(), name: "Jeans" },

            ]
        },
        {
            id: uuid(),
            name: "Footwear",
            color: "text-orange-400",
            categoriesList: [
                { id: uuid(), name: "Flats" },
                { id: uuid(), name: "Casual Shoes" },
                { id: uuid(), name: "Heels" },
                { id: uuid(), name: "Boots" },
                { id: uuid(), name: "Sports Shoes & Floaters" }
            ]
        },
        {
            id: uuid(),
            name: "Sports & Active Wear",
            color: "text-orange-400",
            categoriesList: [
                { id: uuid(), name: "Clothing" },
                { id: uuid(), name: "Footwear" },
                { id: uuid(), name: "Sports Accessories" },
                { id: uuid(), name: "Sports Equipment" }
            ]
        },
        {
            id: uuid(),
            name: "Lingerie & Sleepwear",
            color: "text-orange-400",
            categoriesList: [
                { id: uuid(), name: "Bra" },
                { id: uuid(), name: "Briefs" },
                { id: uuid(), name: "Shapewear" },
                { id: uuid(), name: "Sleepwear & Loungewear" },

            ]
        },
        {
            id: uuid(),
            name: "Beauty & Personal Care",
            color: "text-orange-400",
            categoriesList: [
                { id: uuid(), name: "Makeup" },
                { id: uuid(), name: "Skincare" },
                { id: uuid(), name: "Premium Beauty" },
                { id: uuid(), name: "Lipsticks" },

            ]
        }
    ]


    // Kids Categories

    const kidsCategoriesList = [
        {
            id: uuid(),
            name: "Boys Clothing",
            color: "text-pink-400",
            categoriesList: [
                { id: uuid(), name: "T-Shirts" },
                { id: uuid(), name: "Shirts" },
                { id: uuid(), name: "Shorts" },
                { id: uuid(), name: "Jeans" },

            ]
        },
        {
            id: uuid(),
            name: "Girls Clothing",
            color: "text-pink-400",
            categoriesList: [
                { id: uuid(), name: "Dresses" },
                { id: uuid(), name: "Tops" },
                { id: uuid(), name: "Tshirts" },
                { id: uuid(), name: "Clothing Sets" },


            ]
        },
        {
            id: uuid(),
            name: "Footwear",
            color: "text-pink-400",
            categoriesList: [
                { id: uuid(), name: "Casual Shoes" },
                { id: uuid(), name: "Flipflops" },
                { id: uuid(), name: "Sports Shoes" },
                { id: uuid(), name: "Flats" },


            ]
        },
        {
            id: uuid(),
            name: "Toys & Games",
            color: "text-pink-400",
            categoriesList: [
                { id: uuid(), name: "Learning & Development" },
                { id: uuid(), name: "Activity Toys" },
                { id: uuid(), name: "Soft Toys" },
                { id: uuid(), name: "Action Figure / Play set" }
            ]
        },
        {
            id: uuid(),
            name: "Infants",
            color: "text-pink-400",
            categoriesList: [
                { id: uuid(), name: "Bodysuits" },
                { id: uuid(), name: "Clothing Sets" },
                { id: uuid(), name: "Tshirts & Tops" },
                { id: uuid(), name: "Dresses" },

            ]
        },
        {
            id: uuid(),
            name: "Kids Accessories",
            color: "text-pink-400",
            categoriesList: [
                { id: uuid(), name: "Bags & Backpacks" },
                { id: uuid(), name: "Watches" },
                { id: uuid(), name: "Jewellery & Hair accessory" },
                { id: uuid(), name: "Sunglasses" },

            ]
        }
    ]








    const homeCategoriesList = [
        {
            id: uuid(),
            name: "Bed Linen & Furnishing",
            color: "text-yellow-400",
            categoriesList: [
                { id: uuid(), name: "Bed Runners" },
                { id: uuid(), name: "Mattress Protectors" },
                { id: uuid(), name: "Bedsheets" },
                { id: uuid(), name: "Bedding Sets" }
            ]
        },
        {
            id: uuid(),
            name: "Flooring",
            color: "text-yellow-400",
            categoriesList: [
                { id: uuid(), name: "Floor Runners" },
                { id: uuid(), name: "Carpets" },
                { id: uuid(), name: "Floor Mats & Dhurries" },
                { id: uuid(), name: "Door Mats" }
            ]
        },
        {
            id: uuid(),
            name: "Bath",
            color: "text-yellow-400",
            categoriesList: [
                { id: uuid(), name: "Bath Towels" },
                { id: uuid(), name: "Hand & Face Towels" },
                { id: uuid(), name: "Beach Towels" },
                { id: uuid(), name: "Towels Set" }
            ]
        },
        {
            id: uuid(),
            name: "Lamps & Lighting",
            color: "text-yellow-400",
            categoriesList: [
                { id: uuid(), name: "Floor Lamps" },
                { id: uuid(), name: "Ceiling Lamps" },
                { id: uuid(), name: "Table Lamps" }
            ]
        },
        {
            id: uuid(),
            name: "Home Décor",
            color: "text-yellow-400",
            categoriesList: [
                { id: uuid(), name: "Plants & Planters" },
                { id: uuid(), name: "Aromas & Candles" },
                { id: uuid(), name: "Clocks" }
            ]
        },
        {
            id: uuid(),
            name: "Kitchen & Table",
            color: "text-yellow-400",
            categoriesList: [
                { id: uuid(), name: "Table Runners" },
                { id: uuid(), name: "Dinnerware & Serveware" },
                { id: uuid(), name: "Cups and Mugs" }
            ]
        }
    ]




    const backendUrl = import.meta.env.VITE_BACKEND_URL
    console.log(backendUrl)




    const isToken = Cookies.get("token")
    const [token, setToken] = useState(isToken !== undefined ? isToken : '')








    //Render The Component

    useEffect(() => {

        //console.log(token)
        const getToken = Cookies.get("token")
        setToken(getToken)

    }, [])





    //Profile Details 


    const [profileDetails, setProfileDetails] = useState({})
    const getProfileDetails = async () => {

        //console.log(token)
        const response = await axios.post(backendUrl + "/api/user/profileDetails", {}, { headers: { token: token } })
        //console.log(response.data.profileDetails)
        const userProfile = response.data.profileDetails
        console.log(userProfile)
        setProfileDetails(userProfile)
    }


    useEffect(() => {
        getProfileDetails()
    }, [])










    const value = {
        menCategoriesList, womenCategoriesList, kidsCategoriesList, homeCategoriesList,
        backendUrl, token, setToken,
        navigate, profileDetails, setProfileDetails,

    }
    return (


        <MainContext.Provider value={value} >
            {props.children}
        </MainContext.Provider >
    )
}



export default MainContextProvider