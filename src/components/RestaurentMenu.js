import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurent from "./utils/useRestaurent";
import { addItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurentMenu = () => {
  //read dynamic urls
  // const params = useParams();  //1st way
  // const { resId } = params;    //1 st way
  // console.log("api--->",params);
  const { resId } = useParams(); //2nd way
  // const [restaurents, setRestaurents] = useState(null);

  const restaurents = useRestaurent(resId);

  const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   dispatch(addItem("Grapes"));
  // };

  const addFoodItem = (item) =>{
    dispatch(addItem(item));
  }

  // if (!restaurents) {
  //   return <Shimmer />;
  // }

  return !restaurents ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurent id : {resId}</h1>
        <h2>{restaurents.name}</h2>
        <img
          src={CDN_URL + restaurents.cards[0].card.card.info.cloudinaryImageId}
        />
        <h3>{restaurents.cards[0].card.card.info.city}</h3>
        <h3>{restaurents.cards[0].card.card.info.areaName}</h3>
        <h3>{restaurents.cards[0].card.card.info.avgRating} Stars</h3>
        <h3>{restaurents.cards[0].card.card.info.costForTwoMessage} Stars</h3>
        {/* <h3>{restaurents.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.[0].card.info}</h3> */}
      </div>
      {/* <div>
        <button className="p-2 m-2 bg-green-100" onClick={() => handleAddItem()}>
          Add Item
        </button>
      </div> */}
      <div className="p-5">
        <h1 >Menu</h1>
        <ul data-testid="menu">
          {Object.values(restaurents?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards).map((item)=>(<li key={item?.card?.info?.id}>{item?.card?.info?.name} - <button data-testid="addBtn" className="p-1 bg-green-300" onClick={()=>addFoodItem(item)}>Add</button></li>))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
