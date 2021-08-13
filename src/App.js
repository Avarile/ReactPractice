import React from "react";
import { Switch, Route } from "react-router";
import "./App.scss";
import HomePage from "./Components/HomePage";
import Shop from "./Pages/shop/shop";
import NotFound from "./Components/404notFound";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
