import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./Forms/LoginForm";
import RegisterForm from "./Forms/RegisterForm";

const SwitchComponent = () => {
  return (
    <Switch>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/register">
        <RegisterForm />
      </Route>
    </Switch>
  );
};

export default SwitchComponent;
