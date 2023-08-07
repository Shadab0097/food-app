import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import "./style.css"
import { clearCart } from "../utils/cartSlice";


const Cart =()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()

    const HandleClearCart=()=>{
        dispatch(clearCart())

    }
    return(
        <>
        <div className="m-4 p-4  max-[480px]:ml-0 pl-1.5">
            <h1 className=" text-center font-bold text-2xl">cart</h1>
            <div className="w-7/12 m-auto max-[480px]:ml-0 ">
         {cartItems.length > 0 && <button className=" bg-black text-white rounded-lg p-1"  onClick={HandleClearCart}>Clear Cart</button> }   
                   {cartItems.length === 0 && <h1 className="text-center">Your Cart is Empty Please Add Something</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
        </>
    )
}

export default Cart;