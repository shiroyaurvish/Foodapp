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
      <img data-testid="logo" alt="logo image" className="h-28 p-2" src={Logo}></img>
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
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
      <Title />

      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <li className="px-2">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/Cart" data-testid="cart">Cart - {cartItems.length} Items</Link>
            </li>
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline? "✅":"🔴"}</h1>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
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
