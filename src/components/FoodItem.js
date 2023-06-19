import { CDN_URL } from "../contants";

const FoodItem = ({ cloudinaryImageId, name, category, price,type }) => {
  // const { } = restaurent;

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-yellow-50 h-76">
      {/* <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      /> */}
      <h3 className="font-bold text-2xl">{name}</h3>

      <h4>{category} </h4>
      <h4>Rupees : {price/100}</h4>

      <h4>{type}</h4>
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
