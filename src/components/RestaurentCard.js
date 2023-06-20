import { useContext, useState } from "react";
import { CDN_URL } from "../contants";
import UserContext from "./utils/UserContext";




const RestaurentCard = ({ cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
  costForTwo,
  avgRating, 
  }) => {
    // const { } = restaurent;
    
    
    const {user} = useContext(UserContext)
    
    return (
      <div className="w-56 p-2 m-2 shadow-lg bg-slate-100 h-80 rounded-md">
        <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        />
      <h3 className="font-bold text-2xl line-clamp-2">{name}</h3>
      <h4 className="line-clamp-2">{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} MINS</h4>
      {/* <h5 className="font-bold">{user.name}-{user.email}</h5> */}
      {/* <h4>{user.name}</h4> */}
      </div>
    );
  };
  
  export default RestaurentCard;

 
      // <div className="card">
      //   <img src={image}></img>
      //   <h2>{name}</h2>
      //   <h3>{cusines.join(", ")}</h3>
      //   <h4>{rating} Stars</h4>
      // </div>


