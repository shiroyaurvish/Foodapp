import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import FoodItem from "./FoodItem";
import { clearCart, removeItem, increaseQuantity } from "./utils/cartSlice";

const Cart = () => {
  // const [quantity, setQuantity] = useState(item.quantity || 1);

  const cartItems = useSelector((store) => store.cart.items);
  let totalCartPrice = function totalPrice() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      cartItems[i].quantity = 0;
      total = total + cartItems[i]?.card?.info?.price / 100;
    }
    return total;
  };
  console.log("totalCartItems", totalCartPrice());

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // const handleRemoveItem = (id) => {
  //   dispatch(removeItem(id));
  // };

  const removeFoodItem = (itm) => {
    dispatch(removeItem(itm));
    console.log("cart--->", itm);
  };

  // const increaseItemQuantity = (item) => {
  //   dispatch(increaseQuantity(item));
  // };

  // const increaseItemQuantity = () => {
  //   dispatch(increaseQuantity(item));
  //   setQuantity((prevQuantity) => prevQuantity + 1);
  // };

  console.log("cart items", cartItems);

  const groupedItems = cartItems.reduce((groups, item) => {
    const key = item?.card?.info?.id;
    if (!groups[key]) {
      groups[key] = { item, quantity: 1 };
    } else {
      groups[key].quantity += 1;
    }
    return groups;
  }, {});


  return (
    <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-slate-100">
      <h1 className="font-bold text-3xl ml-10 py-2">
        Cart items - {cartItems.length}
      </h1>
      <h1 className="font-bold text-3xl ml-10 py-2">
        Total Cart - {totalCartPrice()}{" "}
      </h1>
      <button
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md p-2 m-5 ml-10"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="grid grid-cols-5 my-2">
        {/* {cartItems.map((item) => ( */}
          {Object.values(groupedItems).map(({ item, quantity }) => (
            
          <FoodItem
          
          key={item?.card?.info?.id}
            item={item?.card?.info}
            removeFoodItem={removeFoodItem}
            quantity={quantity}
            // increaseItemQuantity={increaseItemQuantity}
            
          />
        ))}
      </div>
      {/* <FoodItem {...cartItems[0].card.info}/> */}
    </div>
  );
};

export default Cart;
