import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const state = useSelector((state) => state.authReducer);

  return (
    <div>
      <div className="header d-flex justify-content-between py-2 shadow-sm">
        <Link to="/">
          <h5 className="font-weight-bold text-danger mx-3">
            Food Delivery App
          </h5>
        </Link>
        <div className="ml-auto d-flex">
          <h4 className="mx-2">Hi {state.user.name}</h4>
          <Link to="logout">
            <button className="btn btn-danger btn-sm mx-2">Log out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
