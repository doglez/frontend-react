import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header d-flex justify-content-between py-2 shadow-sm">
        <a href="#!">
          <h5 className="font-weight-bold text-danger mx-3">
            Food Delivery App
          </h5>
        </a>
        <div className="ml-auto">
          <a href="#!">
            <button className="btn btn-danger btn-sm mx-2">Login</button>
          </a>
          <a href="#!">
            <button className="btn btn-danger btn-sm mr-5">Sign up</button>
          </a>
          <a href="#!">
            <button className="btn btn-danger btn-sm mx-2">Log out</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
