import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "testdummy@gmail.com",
  },
});

UserContext.displayName = "UserContext"

export default UserContext;
