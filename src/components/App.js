import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Layout from "./layout/layout";

import Signup from "./signup";
import Login from "./login";

import Main from "./main";
import Profile from "./profile";
import Products from "./item/items";
import Product from "./item/item";

function App() {
  return (
    <div className="h-screen ">
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </div>
  );
}
export default App;
