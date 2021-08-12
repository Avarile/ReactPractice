import React from "react";
import { Switch, Route } from "react-router";
import "./App.scss";
import HomePage from "./Components/HomePage";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}
