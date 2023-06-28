import { useState } from "react";
import { CDN_URL } from "../contants";
import { useDispatch } from "react-redux";
import { removeItem } from "./utils/cartSlice";

const FoodItem = ({item, removeFoodItem}) => {
  // const { } = restaurent;
  // const [isRemoved, setIsRemoved] = useState(false);

  const dispatch = useDispatch();

  // const removeFoodItem = () => {
  //   dispatch(removeItem());
  // };

  // if (isRemoved){
  //   return null;
  // }

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-slate-100 h-76 text-black rounded-md ml-10">
      {/* {console.log("fooditem ===>",item.id)} */}
      <button onClick={(()=> removeFoodItem(item))}>Remove Item</button>
      <img className="res-logo" alt="res-logo" src={CDN_URL + item.imageId} />
      <h3 className="font-bold text-2xl">{item.name}</h3>
      <h4>Category : {item.category} </h4>
      <h4>Rupees : {item.price / 100}</h4>
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
