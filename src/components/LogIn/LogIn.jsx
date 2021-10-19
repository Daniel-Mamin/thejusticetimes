import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Link, Redirect } from "react-router-dom";

import "./LogIn.scss";

const LogIn = ({ idUser, setIdUser }) => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter email address."),
    password: yup
      .string()
      .min(8, "Must be between 8 and 16 characters.")
      .max(16, "Must be between 8 and 16 characters.")
      .required("Please enter a password."),
  });

  const onSubmitForm = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("ALL_USERS"));
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("ID_USER", user.id);
      setIdUser(user.id);
    } else {
      console.log("Пользователь не найден!");
    }
  };

  return (
    <>
      {idUser && <Redirect to="/" />}
      <div className="login">
        <div className="container">
          <div className="login__wrapper">
            <h1 className="login__title">Log in to your account</h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validateOnBlur
              onSubmit={(values) => onSubmitForm(values)}
              validationSchema={validationSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                handleSubmit,
                dirty,
              }) => (
                <form className="form">
                  <p>
                    <label htmlFor="email" className="form__label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="form__input"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </p>
                  {touched.email && errors.email && (
                    <span className="form__error">{errors.email}</span>
                  )}
                  <p>
                    <label htmlFor="password" className="form__label">
                      Password
                    </label>
                    <input
                      id="password"
                      className="form__input"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </p>
                  {touched.password && errors.password && (
                    <span className="form__error">{errors.password}</span>
                  )}
                  <button
                    className="form__button"
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Create Account
                  </button>
                </form>
              )}
            </Formik>
            <p className="login__link">
              Don’t have a Times account?{" "}
              <Link to="/singin">
                <span>Create one</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
