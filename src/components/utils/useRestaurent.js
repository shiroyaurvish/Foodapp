import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../../contants";

const useRestaurent = (resId) => {
  const [restaurents, setRestaurents] = useState(null);

  //get data from api
  useEffect(() => {
    getRestaurentInfo();
  }, []);

  async function getRestaurentInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
    // console.log("my data=====1>",json)
    setRestaurents(json.data);
  }
  //return restaurent data
  return restaurents;
};

export default useRestaurent;
