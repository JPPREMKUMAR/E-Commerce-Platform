



const CategoryList = (props) => {

    const { itemsList } = props
    console.log(itemsList)
    const { name, categoriesList, color } = itemsList
    console.log(name)
    return (
        <div className="px-5 py-3 cursor-pointer">
            <h1 className={`text-sm ${color} font-semibold`}>{name} </h1>
            <ul className="m-0 flex flex-col gap-y-1 mt-1">
                {

                    categoriesList.map((item, index) => (

                        <li key={index} className="text-sm text-gray-600 hover:text-black"  >{item.name}</li>
                    ))
                }
            </ul>

        </div>
    )
}


export default CategoryList