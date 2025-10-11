
import CategoryList from "../components/CategoryList"
import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const MainPage = () => {
    const { menCategoriesList } = useContext(MainContext)
    //console.log(menCategoriesList)

    return (
        <div className="bg-gray-100 min-h-screen grid grid-cols-4">
            {
                menCategoriesList.map((item, index) => (

                    <CategoryList itemsList={item} key={index} />

                ))
            }

        </div>
    )
}


export default MainPage