import React from "react";
import ReactDOM from "react-dom";

import store from "./store";
import { Provider } from "react-redux";
import SignUpForm from "./components/SignUpForm/SignUpForm";

ReactDOM.render(
  <Provider store={store}>
    <SignUpForm />
  </Provider>,
  document.querySelector("#root")
);
