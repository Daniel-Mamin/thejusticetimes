import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { Formik } from "formik";

import AuthContext from "../../context/AuthContext";
import NoPhoto from "../../assets/img/noPhoto.png";
import "./SingIn.scss";

const SingIn = ({ idUser, setIdUser }) => {
  const { login, isLogin } = useContext(AuthContext);

  const validationSchema = yup.object().shape({
    f_name: yup
      .string()
      .min(3, "Must be more than 3 characters.")
      .required("Please enter a first name."),
    l_name: yup
      .string()
      .min(3, "Must be more than 3 characters.")
      .required("Please enter a first name."),
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

  const onSubmitForm = async ({ f_name, l_name, email, password }) => {
    try {
      await axios
        .post(
          "/api/auth/registration",
          { f_name, l_name, email, password },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          login(response.data.token, response.data.userId);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log("Request", error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    } catch (e) {
      console.log(e);
    }
    // const users = JSON.parse(localStorage.getItem("ALL_USERS"));
    // const user = users.find((user) => user.email === email);
    //
    // if (user) {
    //   console.log("Пользователь найден!");
    // } else {
    //   const newUser = {
    //     id: Date.now().toString(),
    //     f_name: first_name,
    //     l_name: last_name,
    //     email,
    //     password,
    //     description: `${first_name} odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.`,
    //     avatar: NoPhoto,
    //   };
    //
    //   users.push(newUser);
    //
    //   console.log(users);
    //
    //   localStorage.setItem("NEW_USER", JSON.stringify(newUser));
    //   localStorage.setItem("ALL_USERS", JSON.stringify(users));
    //   localStorage.setItem("ID_USER", newUser.id);
    //   setIdUser(newUser.id);
    // }
  };

  return (
    <>
      {isLogin && <Redirect to="/" />}
      <div className="singin">
        <div className="container">
          <div className="singin__wrapper">
            <h1 className="singin__title">Create your free account</h1>
            <Formik
              initialValues={{
                f_name: "",
                l_name: "",
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
                    <label htmlFor="first_name" className="form__label">
                      First name
                    </label>
                    <input
                      id="f_name"
                      className="form__input"
                      type="text"
                      name="f_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.first_name}
                    />
                  </p>
                  {touched.f_name && errors.f_name && (
                    <p className="form__error">{errors.f_name}</p>
                  )}
                  <p>
                    <label htmlFor="last_name" className="form__label">
                      Last name
                    </label>
                    <input
                      className="form__input"
                      type="text"
                      name="l_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last_name}
                    />
                  </p>
                  {touched.l_name && errors.l_name && (
                    <p className="form__error">{errors.l_name}</p>
                  )}
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
                      value={values.email}
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
                      value={values.password}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SingIn;
