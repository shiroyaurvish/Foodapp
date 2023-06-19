import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { Title } from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";

//chunking or lazyloading 0r dynamic loading  or code spliting or ondemand loading or dynamic import
const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));

/*
      header
       -log
       -nav items
       -cart
      body
       -search bar
       -restaurent list
       -restaurent card
         -image
         -name
         -rating
         -casions
      footer
       -links
       -copyright
*/

//Config Driven UI

// const config = [
//   {
//     type : "carousel",
//     cards : [
//       {
//         offerName : "50% off"
//       },
//       {
//         offerName : "No Delievry Charges"
//       }
//     ]
//   },
//   {
//     type : "restaurents",
//     cards : [
//       {
//         name : "Burger King",
//         image : require("./images/R 1.jpg"),
//         cusines : ["Fast Food","Healthy Food"],
//         rating : "4.2"
//       },
//       {
//         name : "KFC",
//         image : require("./images/R 1.jpg"),
//         cusines : ["Fast Food","Healthy Food"],
//         rating : "4.2"
//       }
//     ]
//   }
// ]

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Urvish",
    email: "test@gmail.com",
  });

  return (
    // <React.Fragment>
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        {/* { outlet - whatever is rendering} */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
    /* </React.Fragment> */
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path:"/Cart",
        element:<Cart/>,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2);
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
