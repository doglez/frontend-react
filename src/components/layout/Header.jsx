import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LogOutAuthAction } from "../../redux/actions/authAction-creators";

const Header = (props) => {
  const history = useHistory();

  return (
    <div>
      <div className="header d-flex justify-content-between py-2 shadow-sm">
        <Link to="/">
          <h5 className="font-weight-bold text-danger mx-3">
            Food Delivery App
          </h5>
        </Link>
        <div className="ml-auto d-flex">
          <h4 className="mx-2">Hi {props.state.user.name}</h4>
          <button
            className="btn btn-danger btn-sm mx-2"
            onClick={() => props.logOut(history)}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.authReducer,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: (history) => {
    dispatch(LogOutAuthAction(history));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
