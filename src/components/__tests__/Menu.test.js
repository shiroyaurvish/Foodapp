import "@testing-library/jest-dom";

import { fireEvent, render, waitFor } from "@testing-library/react";
import RestaurentMenu from "../RestaurentMenu";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data.js";
import Header from "../Header"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("search for string(pizza) on home page", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
            <Header/>
          <RestaurentMenu />
        </Provider>
      </StaticRouter>
    );
  
    //   console.log(body);
  
    await waitFor(()=> expect(body.getByTestId("menu")))  
  
    const addBtn = body.getAllByTestId("addBtn");
  
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[2]);
  
  
    const cart = body.getByTestId("cart");
  
    expect(cart.innerHTML).toBe("Cart - 1 Items");
  
    
  
    // console.log(shimmer);
  });