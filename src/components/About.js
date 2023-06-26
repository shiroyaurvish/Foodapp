import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";
import UserContext from "./utils/UserContext";

// const About2 = () => {
//   return (
//     <div>
//       <h1>This is About page</h1>
//       <p>This contains all about page information</p>
//       {/* <Outlet/>    //1st way */}
//       <Profile name={"UrvishClass"} xyz={"abc"}/>  {/* //2nd way via profile import*/}
//       <ProfileFunctionalComponent name={"Urvish"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("p- constructor");
  }

  componentDidMount() {
    //best place to make api call

    // console.log("p- componentdidmount");
  }

  render() {
    // console.log("p- render");
    return (
      <div className="">
        <h1>This is About page</h1>
        <UserContext.Consumer>
          {/* {(value)=>{console.log(value)}} */}
          {({user})=><h4 className="font-bold text-xl p-10">{user.name}-{user.email}</h4>}
        </UserContext.Consumer>
        <p>This contains all about page information</p>
        {/* <Outlet/>    //1st way */}
        {/* <Profile name={"child1"} xyz={"abc"} /> */}
        {/* <Profile name={"UrvishClass"} xyz={"abc"} /> */}
        {/* //2nd way via profile import*/}
        <ProfileFunctionalComponent name={"Urvish"} />
      </div>
    );
  }
}
export default About;
