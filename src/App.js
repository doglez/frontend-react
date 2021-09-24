import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./assets/css/styles.css";
import Home from "./components/home/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.authReducer);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {!state.isLoggedIn ? <Redirect to="/login" /> : <Home />}
        </Route>
        <Route path="/login">
          {state.isLoggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {state.isLoggedIn ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
