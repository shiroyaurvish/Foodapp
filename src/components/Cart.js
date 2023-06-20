import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem"
import { clearCart } from "./utils/cartSlice";

const Cart =()=>{

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart =() =>{
        dispatch(clearCart());
    }

    console.log("cart ",cartItems)

    return(
        <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-slate-100">
        <h1 className="font-bold text-3xl ml-10 py-2">Cart items - {cartItems.length}</h1>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md p-2 m-5 ml-10" onClick={handleClearCart}>Clear Cart</button>
        <div className="flex">
        {
            cartItems.map((item)=>(<FoodItem key={item?.card?.info?.id} {...item.card.info}/>))
        }
        </div>
        {/* <FoodItem {...cartItems[0].card.info}/> */}
        </div>
    )
}

export default Cart;