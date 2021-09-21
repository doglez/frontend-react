import React from "react";
import FootImage from "../../assets/img/pizza-1454239_640.png";

const Home = () => {
  return (
    <div
      className="home-main foodImage"
      style={{ backgroundImage: `url(${FootImage})` }}
    >
      <form className="d-flex justify-content-center">
        <div className="form-group m-0">
          <input
            type="text"
            className="form-form-control search-form-control"
            placeholder="Enter deliveryy address"
          />
        </div>
        <button className="ml-2 btn btn-danger btn-sm">Search</button>
      </form>
    </div>
  );
};

export default Home;
