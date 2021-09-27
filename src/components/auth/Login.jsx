import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LoginAuthAction } from "../../redux/actions/authAction-creators";

const Login = (props) => {
  const [userState, setUserState] = useState({});

  return (
    <div>
      <div className="sign-in-main">
        <div className="container d-flex">
          <div className="sign-in-container py-5 m-auto border">
            <div className="sign-in-header">
              <h4 className="font-weight-bold">Login</h4>
              <p className="sign-in-intro">
                <span className="text-muted">New to Food Delivery App ? </span>
                <Link to="/register">
                  <span className="text-danger font-weight-bold">Sign Up</span>
                </Link>
              </p>
              <div className="login-social-media py-3">
                <button className="btn btn-primary btn-block btn-sm">
                  Continue with Google
                </button>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                props.login(userState);
              }}
            >
              <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  onChange={(e) => {
                    const email = e.target.value;
                    setUserState({ ...useState, ...{ email } });
                  }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  onChange={(e) => {
                    const password = e.target.value;
                    setUserState({ ...userState, ...{ password } });
                  }}
                />
              </div>
              <button type="submit" className="btn btn-danger btn-sm">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.authReducer,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userState) => {
    dispatch(LoginAuthAction(userState));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
