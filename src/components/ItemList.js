import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch()

    const HandleAddItmes =(item)=>{
        dispatch(addItem(item))

    }
    return (
        <>
            <div>

                {items.map((item) => {
                                return(
                    <div data-testid ="foodItems" key={item?.card?.info?.id} className="description-list">

                        <div className="menuPrice">
                            <span className="menu-name"> {item?.card?.info?.name}</span>
                            <span className="menu-cost"> ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice/ 100}</span>
                            <p className="description">{item?.card?.info?.description}</p>
                            <p> ⭐{item?.card?.info?.ratings.aggregatedRating.rating}</p>
                        </div>
                        
                        <div className="menuListImg"> 
                        {<img className="menuImg" src={CDN_LINK + item?.card?.info?.imageId} />} 
                        <button data-testid ="btntest" className="add-btn" onClick={()=>HandleAddItmes(item)}>Add<span className="plus-btn">➕</span></button>
                        </div> 

                    </div>
                    
                    )
                }

                )}
            </div>
        </>
    )
}

export default ItemList;