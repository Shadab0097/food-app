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

    const [showIndex , setShowIndex] = useState(0)

    // console.log('hello')
    // useEffect(() => {
    //     fetchDataresMenu()
    //     console.log('succefull')

    // }, [])

    // const fetchDataresMenu = async () => {
    //     console.log(restid)
    //     const dataMenu = await fetch(MENU_LINK + restid )
    //     const jsonMenu = await dataMenu.json()
    //     console.log(jsonMenu)
    //     setRestInfo(jsonMenu?.data)
    // }

    if (restInfo === null) return <MenuShimmer />


    const { name, cuisines } = restInfo?.cards[0]?.card?.card?.info;

    // const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    const { areaName, avgRatingString, totalRatingsString } = restInfo?.cards[0]?.card?.card?.info;

    // console.log(restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const responsiveCatogories = restInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards || restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    
    const categories = responsiveCatogories.filter((c) => {
        return (c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    })

    console.log(categories)

    // console.log(itemCards)
    // const{imgdata} =props
    // const {cloudinaryImageId } = imgdata?.data?.data

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

            {/* <ul className="menuLi"> */}

            {categories?.map((category ,index) => <RestaurantsCategory menu={category?.card?.card} 
            key={category?.card?.card?.title} 
            showMenu={index === showIndex ? true:false}
            setShowIndex={()=>{return setShowIndex(index)}}
            
            />) }

            {/* </ul> */}
        </>
    )
}

export default RestMenu;