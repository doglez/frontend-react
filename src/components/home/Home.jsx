import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-main foodImage">
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
      <Footer />
    </div>
  );
};

export default Home;
