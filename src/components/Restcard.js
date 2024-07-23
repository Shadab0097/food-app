// import { useState } from "react";
import { CDN_LINK } from "../utils/constants";

const Restcard = (props) => {
  // const[color , setcolor]= useState(true)
  const { restdata } = props;
  // console.log(restdata)
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } = restdata?.info
  const { deliveryTime } = restdata?.info?.sla
  return (
    <div className="card_cont">
      <div data-testid = "restCardId" className="card" >
        <img className="card_img h-[181px] w-[273px] rounded-md"
          alt="res-img" src={CDN_LINK + cloudinaryImageId} />
        <div className="card_info">
          <h5 className="rest-name">{name}</h5>
          <p className="cuisine">{cuisines.join(',')}</p>
          {/* <h5></h5> */}
          <p className="card-detail"> <span className="rating-star">⭐{avgRating}</span> .<span className="rating">{deliveryTime}min</span>  . {costForTwo}</p>

          <h4 className="view">QUICK VIEW</h4>
          <div className="quick-view">
            <h5 className="rest-name">{name}</h5>

            <p className="cuisine">{cuisines.join(',')}</p>



          </div>

        </div>

      </div>
    </div>


  )
}

export const withPromotedLabel = (Restcard) => {
  return (props) => {
    return (
      <div>
        <label className="promoted">Promoted</label>
        <Restcard {...props} />
      </div>
    )
  }
}

export default Restcard;