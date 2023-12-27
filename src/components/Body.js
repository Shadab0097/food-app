import Restcard, { withPromotedLabel } from "./Restcard";
// import restlist from "../utils/mockdata";
import { useCallback, useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { REST_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { useNavigate } from "react-router-dom";
// import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";
import { CDN_LINK } from "../utils/constants";
import { Search } from "lucide-react";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"


const Body = () => {
  const [inputList, setinputList] = useState("");
  const [Listofrest, setListofrest] = useState([]);
  const [filterList, setfilterList] = useState([])
  const [homeImages, setHomeImages] = useState([])
  // const[style,setStyle] =useState([])
  // const navigate = useNavigate()

  const { loggedIn, setShowUser } = useContext(UserContext)

  const PromotedLabel = withPromotedLabel(Restcard)
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(REST_LIST)
    const json = await data.json()
    console.log(json)
    setListofrest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setHomeImages(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [])
    // setStyle(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)
  }
  // const {Listofrest , filterList} = useRestaurantList();
  const onlineStatus = useOnlineStatus()

  if (onlineStatus === false) {
    return (

      <h1> Looks like you lost your internet connection ☹️</h1>

    )
  }

  if (Listofrest.length === 0) {
    return <Shimmer />

  }

  function searchFilter() {
    if (inputList === "") {
      alert('Input value does not match restaurant name!');
    } else {
      let filterOut = Listofrest.filter((res) => res?.info?.name.toLowerCase().includes(inputList.toLowerCase()))
      setfilterList(filterOut);
    }

  }
  
  const renderSlide = homeImages.map((crausalImg) => <img className="header_img" src={CDN_LINK + crausalImg.imageId} key={crausalImg.id} />)
  //  const yourMind = style.map((styleImage)=> <img className="image-row img" src={CDN_LINK + styleImage.imageId} key={styleImage.id}/>)
  return (
    <>
      <div className="secod_header">

        <div className="scrollWrapper">
        <h1 className="mind-top">What's on your mind?</h1>
          <div className="imageRow">
           

            {renderSlide}

          </div>
        </div>
      </div>

      {/* <div className="style-header">
      <div className="image-row-container">
    <div className="image-row">
    {yourMind}
    </div>
    </div>
    </div> */}



      <div className="body">
        <div className="restnum">
          <h3 className="total-res">🍽️ {filterList.length} restaurants 🍽️</h3>
          <div className="input-box">
          <input type="text" data-testid="searchinput" className="search" placeholder="search restaurants" onChange={(e) => { setinputList(e.target.value) }}
            value={inputList} /> <button className="btn" data-testid="btnId" onClick={searchFilter}><Search size={24} /></button>
            </div>
          <div>
            {/* <input value={loggedIn} onChange={(e)=>setShowUser(e.target.value)}/> */}
          </div>
        </div>


        <div className="homeBtn">

          <button className="taskBtn" onClick={() => {
            let filterTop = Listofrest.filter((restop) => restop?.info?.avgRating > 0)
            setfilterList(filterTop)
          }}>Relevance</button>

          <button className="taskBtn" onClick={() => {
            let filterTime = Listofrest.filter((restime) => restime?.info?.sla?.deliveryTime <= 25)
            setfilterList(filterTime)
          }}>Delivery Time</button>

          <button className="taskBtn" onClick={() => {
            let filterTop = Listofrest.filter((restop) => restop?.info?.avgRating >= 4)
            setfilterList(filterTop)
          }}> Rating </button>

          <button className="taskBtn" onClick={() => {
            let sorted = Listofrest.filter((price) => price?.info?.costForTwo <= "₹300 for two")
            setfilterList(sorted)
          }}>Cost:low price</button>

          <button className="taskBtn" onClick={() => {
            let high = Listofrest.filter((highprice) => highprice?.info?.costForTwo >= "₹400 for two")
            setfilterList(high)
          }}>Cost:high price</button>
        </div>

      </div>
      <div className="res_containor">
        {filterList?.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restmenu/" + restaurant?.info.id} className="link" >
            {restaurant?.info?.promoted ? <PromotedLabel restdata={restaurant} /> : <Restcard restdata={restaurant} />}
          </Link>
        )
        )}
      </div>
    </>
  )
}



export default Body;