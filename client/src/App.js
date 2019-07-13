import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import Index from "./views/Index";

import "./../node_modules/bulma/css/bulma.css";

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
