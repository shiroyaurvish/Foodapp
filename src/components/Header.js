import { useContext, useEffect, useState } from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

// const loggedInUser = () => {
//   //API Call to Check Authentication
//   return true;
// };

export const Title = () => {
  return (
    <a href="/">
      <img data-testid="logo" alt="logo image" className="h-20 p-2 pl-10 rounded-lg" src={Logo}></img>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline =useOnline();

  const {user} = useContext(UserContext)

  const cartItems = useSelector(store => store.cart.items);

  console.log("cart",cartItems)
  return (
    <div className="flex bg-gradient-to-r from-slate-950 to-blue-950 text-slate-100 h-20 shadow-lg sticky top-0">
      <Title/>

      <div className="nav-items ">
        <ul className="flex py-7">
          <li className="px-4 ">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="px-4">About</li>
          </Link>
          <li className="px-4">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="ml-[840px] px-4">
            <Link to="/Cart" data-testid="cart">Cart - {cartItems.length} Items</Link>
            </li>
        </ul>
      </div>
      {/* <h1 data-testid="online-status">{isOnline? "✅":"🔴"}</h1> */}
      {/* <span className="p-10 font-bold text-red-900">{user.name}</span> */}
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          LogOut
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
