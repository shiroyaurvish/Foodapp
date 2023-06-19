import { useContext } from "react";
import UserContext from "./utils/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext);
    return <h4 className="font-bold p-10 m-10 space-x-7" >{user.name}-{user.email} Food Villa @2023 All Rights Reserved.</h4>;
  };

export default Footer;