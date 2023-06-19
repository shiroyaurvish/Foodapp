import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  const logo = header.getAllByTestId("logo");

  //check if logo is loaded

//   console.log(logo[0]);

  expect(logo[0].src).toBe("http://localhost/dummy.png");

});


test("online should be greeen  on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  const onlineStatus = header.getByTestId("online-status");

  //check onlinestatus

  console.log(onlineStatus);

  expect(onlineStatus.innerHTML).toBe("✅");

});


test("cart should be zero  on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  const cart = header.getByTestId("cart");

  //check cart

  console.log(cart);

  expect(cart.innerHTML).toBe("Cart - 0 Items");

});
