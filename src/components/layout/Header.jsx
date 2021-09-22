import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header d-flex justify-content-between py-2 shadow-sm">
        <Link to="/">
          <h5 className="font-weight-bold text-danger mx-3">
            Food Delivery App
          </h5>
        </Link>
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-danger btn-sm mx-2">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-danger btn-sm mr-5">Sign up</button>
          </Link>
          <Link to="logout">
            <button className="btn btn-danger btn-sm mx-2">Log out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
