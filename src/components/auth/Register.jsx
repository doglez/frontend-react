import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { RegisterAuthAction } from "../../redux/actions/authAction-creators";

const Register = (props) => {
  const { user, register } = props;
  const [userState, setUserState] = useState({});

  return (
    <div>
      <div className="sign-in-main">
        <div className="container d-flex">
          <div className="sign-in-container py-5 m-auto border">
            <div className="sign-in-header">
              <h4 className="font-weight-bold">Sign Up</h4>
              <p className="sign-in-intro">
                <span className="text-muted">Do you have account ? </span>
                <Link to="/login">
                  <span className="text-danger font-weight-bold">Login</span>
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
                // console.log(user);
                register(userState);
              }}
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Name"
                      onChange={(e) => {
                        const name = e.target.value;
                        setUserState({ ...userState, ...{ name } });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  onChange={(e) => {
                    const email = e.target.value;
                    setUserState({ ...userState, ...{ email } });
                  }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  onChange={(e) => {
                    const password = e.target.value;
                    setUserState({ ...userState, ...{ password } });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password_confirmation">
                  Password Confirmation
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  onChange={(e) => {
                    const password_confirmation = e.target.value;
                    setUserState({
                      ...userState,
                      ...{ password_confirmation },
                    });
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

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userState) => {
      dispatch(RegisterAuthAction(userState));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
