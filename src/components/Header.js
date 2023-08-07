import { useContext, useState } from "react";
// import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import image from '../utils/logo.png.png'
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"




const Header = () => {
  const [btnName, setbtnName] = useState('LogIn')
  // const [inputList, setinputList] = useState("");


  const onlineStatus = useOnlineStatus()
  const { loggedIn } = useContext(UserContext)

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  return (
    <>
      <div className="header">
        <div className="logo_containor">
          <img className="logo" src={image} />
          <p className="location"><span className="sect-14">Sector 14 </span>  Gurugram, Haryana 122022, India</p>

        </div>
       
        <div className="nav_item">
          <ul>

            <li className="online">Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us </Link></li>
            <li><Link to="/grocery">Grocery </Link></li>
            <li><Link to="/cart">Cart({cartItems.length})</Link></li>
            <button className="loginbtn" onClick={() => {
              btnName == 'LogIn' ? setbtnName('LogOut') : setbtnName('LogIn')
            }}>{btnName}
            </button>


          </ul>

        </div>
        {/* <li>{loggedIn}</li> */}

      </div>

    </>
  )
};

export default Header;