import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import { HashRouter, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import PostsPage from "./components/PostsPage/PostsPage";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PostsPage} />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={SignUpForm} />
    </HashRouter>
  </Provider>,
  document.querySelector("#root")
);
