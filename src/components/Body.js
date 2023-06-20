import { useContext, useEffect, useState } from "react";
import { restaurentList } from "../contants";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/Helper";
import useOnline from "./utils/useOnline";
import UserContext from "./utils/UserContext";



const Body = () => {
  
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  //   const searchtxt = "SUB Way"; //in js
  const [searchInput, setSearchInput] = useState(" "); //in react
  const {user,setUser} = useContext(UserContext)

 
  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      
    );
    const json = await data.json();

    //optional chaining use
    setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurents(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if(!isOnline){
    return<h1>🔴 Your'e Now offline.. Check Your Internet Connection!!!!</h1>
  }

  console.log("render");



  //not render components (early return)
  if (!allRestaurents) return null;

  // if(filteredRestaurents?.length == 0)
  //   return <h1>No Result Found With Your Filter !!!</h1>

  return allRestaurents?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
    <div className="bg-gradient-to-r from-slate-900 to-blue-950">
      <div className="ml-5 ">
        <input
        data-testId="search-input"
          type="text"
          placeholder="Search the Restaurent"
          className=" m-2 p-2 w-80 rounded-md border border-black ml-5"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button
        data-testid = "search-btn"
          // style={{
          //   backgroundColor : "green"
          // }}
          className="search-btn p-2 m-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md"
          onClick={() => {
            //filter data
            // console.log("searchInput===>",searchInput)
            const data = filterData(searchInput, allRestaurents);
            //update the state-restaurents
            // console.log("filter data ===>",data)
            setFilteredRestaurents(data);
          }}
        >
          Search
        </button>
        {/* <input value={user.name} onChange={(e)=>{
          setUser({
            ...user,
            name : e.target.value
          })
        }}></input> */}
        {/* <input value={user.email} onChange={(e)=>{
          setUser({
            ...user,
            email : e.target.value
          })
        }}></input> */}
      </div>
      <div className="flex flex-wrap ml-8" data-testid="res-list">
        {filteredRestaurents.map((restaurent) => {
          return (
            <Link to={"/restaurent/" + restaurent.data.id} key={restaurent.data.id}>
              <RestaurentCard {...restaurent.data}  />
            </Link>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Body;
