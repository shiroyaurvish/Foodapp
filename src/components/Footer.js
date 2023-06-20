import { useContext } from "react";
import UserContext from "./utils/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext);
    return <h4 className="font-bold p-5 text-center space-x-7 text-slate-200 bg-gradient-to-r from-slate-950 to-blue-950 " >Food Villa @2023 All Rights Reserved.</h4>;
  };

export default Footer;