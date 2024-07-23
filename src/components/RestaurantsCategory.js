import { useState } from "react";
import { CDN_LINK } from "../utils/constants";
import ItemList from "./ItemList";

const RestaurantsCategory = ({ menu , showMenu , setShowIndex}) => {
    // const[showMenu , setShowMenu]= useState(false)
    const[toggle , setToggle]= useState(true)
    const handleClick =()=>{
        setShowIndex(!showMenu)
        setToggle(!toggle)
    }

    console.log(menu)

    // console.log(menu?.card?.card?.title)



    return (
        <>
            <div className="menuListCont1">

                <div className="menu-title" onClick={handleClick}>
                    <span className="title">{menu?.card?.card?.title}  ({menu?.card?.card?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>
               
                <div>
                  {(showMenu && toggle ) && <ItemList items={menu?.card?.card?.itemCards} />}
                </div>
            
                <div className="end-border"></div>




            </div>
        </>
    )

}

{/* <div className="menuContainor" key={menu?.itemcards?.info?.id}>
                
                <div className="menuListCont">
                    <div className="menuList"> <li key={menu?.itemcardscard?.info?.id}>{menu?.itemcards?.info?.name}<span className="menuPrice">Rs{menu?.itemcardscard?.info?.price/100 }</span></li> </div>
                    <div className="menuListImg"> {<img className="menuImg" src={CDN_LINK + menu?.itemcardscard?.info?.imageId} />} </div>

                </div> */}

export default RestaurantsCategory;

