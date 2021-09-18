import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="container-fluid ps-md-0">
      <div className="row">
        <div className="col-md-9 col-lg-8 mx-auto py-5">
          <h3 className="login-heading mb-4">Register</h3>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              password_confirmation: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              email: Yup.string()
                .max(45, "Must be 45 characters or less")
                .required("Required")
                .email("Invalid email address"),
              password: Yup.string().required("Required"),
              password_confirmation: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Required"),
            })}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
              resetForm();
            }}
          >
            <Form>
              <div className="form-floating mb-3">
                <Field name="name" type="text" className="form-control" />
                <label htmlFor="name">Name</label>
                <ErrorMessage name="name" />
              </div>

              <div className="form-floating mb-3">
                <Field name="email" type="email" className="form-control" />
                <label htmlFor="email">Email</label>
                <ErrorMessage name="email" />
              </div>

              <div className="form-floating mb-3">
                <Field name="password" type="text" className="form-control" />
                <label htmlFor="password">Password</label>
                <ErrorMessage name="email" />
              </div>

              <div className="form-floating mb-3">
                <Field
                  name="password_confirmation"
                  type="text"
                  className="form-control"
                />
                <label htmlFor="password_confirmation">
                  Password Confirmation
                </label>
                <ErrorMessage name="password_confirmation" />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary text-uppercase fw-bold mb-2"
              >
                Submit
              </button>
            </Form>
          </Formik>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
