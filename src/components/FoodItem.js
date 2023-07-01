import { useState } from "react";
import { CDN_URL } from "../contants";
import { useDispatch } from "react-redux";
import { removeItem } from "./utils/cartSlice";
import { useSelector } from "react-redux";
import { increaseQuantity } from "./utils/cartSlice";

const FoodItem = ({ item, removeFoodItem }) => {
  const updatedItem = {
    ...item,
    quantity : 1
  }

  console.log(updatedItem);

  // const [quantity, setQuantity] = useState(item?.quantity || 1);

  // const { } = restaurent;
  // const [isRemoved, setIsRemoved] = useState(false);
  const dispatch = useDispatch();

  // const cartItems = useSelector((store) => store.cart.items);

  const increaseItemQuantity = (updatedItem) => {
    // console.log("update item-->",updatedItem);
    dispatch(increaseQuantity(updatedItem));
  };

  // console.log(cartItems,"fooitem")

  // const removeFoodItem = () => {
  //   dispatch(removeItem());
  // };

  // if (isRemoved){
  //   return null;
  // }

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-slate-100 h-76 text-black rounded-md ml-10">
      {/* {console.log("fooditem ===>",item.id)} */}
      <div className="m-2 p-2">
        <h2 className="font-bold text-2xl ml-2  py-2">Qty - {updatedItem.quantity}</h2>
        <button
          className="mx-2 p-2 rounded bg-green-200"
          onClick={() => removeFoodItem(item)}
        >
          Remove Item
        </button>
        <button
          className="mx-2 p-2 my-2 rounded bg-green-200"
          onClick={() => increaseItemQuantity(updatedItem)}
        >
          Add
        </button>
        <button className="mx-2 p-2 my-2 rounded bg-green-200">
          Substract
        </button>
      </div>
      <img className="res-logo" alt="res-logo" src={CDN_URL + updatedItem?.imageId}/>
      <h3 className="font-bold text-2xl">{updatedItem?.name}</h3>
      <h4>Category : {updatedItem?.category} </h4>
      <h4>Rupees : {updatedItem?.price / 100}</h4>
      {/* <h4>{type}</h4> */}
    </div>
  );
};

export default FoodItem;

// <div className="card">
//   <img src={image}></img>
//   <h2>{name}</h2>
//   <h3>{cusines.join(", ")}</h3>
//   <h4>{rating} Stars</h4>
// </div>
