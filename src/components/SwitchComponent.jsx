import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import HomeComponent from "./home/HomeComponent";

const SwitchComponent = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />

      <Route path="/register" component={RegisterForm} />

      <Route path="/" exact component={HomeComponent} />
    </Switch>
  );
};

export default SwitchComponent;
