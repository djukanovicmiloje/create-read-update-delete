import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import { HashRouter, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import PostsPage from "./components/PostsPage/PostsPage";
import CreatePostPage from "./components/CreatePostPage/CreatePostPage";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route exact path="/" component={PostsPage} />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={SignUpForm} />
      <Route path="/new" component={CreatePostPage} />
    </HashRouter>
  </Provider>,
  document.querySelector("#root")
);
