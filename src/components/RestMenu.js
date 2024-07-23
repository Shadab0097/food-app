// import { useEffect, useState } from "react"
// import Shimmer from "./Shimmer"
import MenuShimmer from "./MenuShimmer";
import { useParams } from "react-router-dom"
import { CDN_LINK } from "../utils/constants";
// import { MENU_LINK } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantsCategory from "./RestaurantsCategory";
import { useState } from "react";



const RestMenu = () => {

    const { restid } = useParams()

    const restInfo = useRestaurantMenu(restid)

    const [showIndex, setShowIndex] = useState(0)
    const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"


    if (restInfo === null) return <MenuShimmer />

    const { name, cuisines } = restInfo?.cards[2]?.card?.card?.info || restInfo?.cards[0]?.card?.card?.info;

    const { areaName, avgRatingString, totalRatingsString } = restInfo?.cards[2]?.card?.card?.info || restInfo?.cards[0]?.card?.card?.info;

    const responsiveCatogories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    const menuCategories = responsiveCatogories.filter((c) => {
        return (
            c?.card?.card["@type"] === itemCategory
        )


    })

    // console.log(menuCategories)




    return (
        <>
            <div className="infoContainor">
                <div className="info_sub_Cont">
                    <div className="location2">
                        <h1 className="nameInfo">{name}</h1>
                        <p className="areaInfo">{cuisines.join(',')} <span>{areaName}</span> </p>
                    </div>
                    <div className="ratings"><span className="avgrating">{avgRatingString}</span><span className="avgratingString">{totalRatingsString}</span></div>
                </div>
            </div>
            <h2 className="menuName">menu</h2>

      

            {menuCategories?.map((category, index) => {

                return (
                    <RestaurantsCategory menu={category}
                        key={category?.card?.card?.title}
                        showMenu={index === showIndex ? true : false}
                        setShowIndex={() => { return setShowIndex(index) }}
 />)
 
            })}


        </>
    )
}

export default RestMenu;