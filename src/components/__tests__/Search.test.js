import "@testing-library/jest-dom";

import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("shimeer should load on home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  //   console.log(body);

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(12);

  console.log(shimmer);
});


test("restaurent should load on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  //   console.log(body);

  await waitFor(()=> expect(body.getByTestId("search-btn")))  

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(15);

  // console.log(shimmer);
});

test("search for string(pizza) on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  //   console.log(body);

  await waitFor(()=> expect(body.getByTestId("search-btn")))  

  const input = body.getByTestId("search-input");

  fireEvent.change(input,{
    target : {
      value : "pizza",
    }
  })

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(2);

  

  // console.log(shimmer);
});
