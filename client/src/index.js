import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import jwt_decode from "jwt-decode";
import store from "./store";
import { logoutUser, refreshToken } from "./actions/authActions";
import { LOGIN_URL } from "./routes/index";

window.lastActiveTime = new Date();
window.onclick = () => (window.lastActiveTime = new Date());
window.onmousemove = () => (window.lastActiveTime = new Date());
window.onkeypress = () => (window.lastActiveTime = new Date());
window.onscroll = () => (window.lastActiveTime = new Date());

const CheckIdleTime = () => {
  if (localStorage.jwtToken) {
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);

    let dateNowTime = new Date().getTime();
    let lastActiveTime = new Date(window.lastActiveTime).getTime();
    // converting from milliseconds to seconds
    let idleTime = Math.floor((dateNowTime - lastActiveTime) / 1000);

    let expTime = decoded.exp - decoded.iat;
    if (idleTime > expTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = LOGIN_URL;
    } else {
      // Refresh Token
      store.dispatch(refreshToken());
    }
  }
};

window.setInterval(CheckIdleTime, 3600000); // 1 H === 3600000 milliseconds

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
