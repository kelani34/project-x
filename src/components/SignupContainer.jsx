import React, { useEffect, useState } from "react";
import images from "../constants/images";
import Button from "./shared/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { country_list } from "../constants/data";

const SignupContainer = ({ link, title, connection, nextText }) => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
  };

  const [passwordState, setPasswordState] = useState("password");

  function validationSchema() {
    return Yup.object().shape({
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters"),
    });
  }
  const handleViewPassword = () => {
    if (passwordState === "text") {
      setPasswordState("password");
    } else {
      setPasswordState("text");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="md:flex items-center justify-center h-full m-4">
      <div className="md:w-[60%] md:border-solid md:border md:border-[#CDD2D5] md:py-4 md:px-12">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center ">
            <h1 className="md:font-semibold lg:text-[32px] md:text-[28px] text-[24px] text-center my-8">
              {title}
            </h1>
            <div className="mb-5">
              <Button text="Continue with Google" image={images.google} />
            </div>
          </div>
          <div className="flex items-center gap-3 mb-7 justify-center">
            <div className="w-[187px] h-0 border border-solid border-[#CDD2D5]" />
            <span>or</span>
            <div className="w-[187px] h-0 border border-solid border-[#CDD2D5]" />
          </div>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, resetForm }) => (
                <Form>
                  <div>
                    <div className=" md:flex gap-5 ">
                      <div className=" md:w-[50%]">
                        <Field
                          name="firstname"
                          type="text "
                          placeholder="First Name"
                          className={
                            " mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none text-xs " +
                            (errors.firstname && touched.firstname
                              ? "border-[#f52d2d] "
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="firstname"
                          component="div"
                          className="mt-1 mb-2 text-xs text-[#f52d2d]"
                        />
                      </div>
                      <div className=" md:w-[50%]">
                        <Field
                          name="lastname"
                          type="text"
                          placeholder="Last Name"
                          className={
                            "mb-4 w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none " +
                            (errors.lastname && touched.lastname
                              ? "border-[#f52d2d]  "
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="lastname"
                          component="div"
                          className="mt-1 mb-2 text-xs text-[#f52d2d]"
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={
                          "w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none " +
                          (errors.email && touched.email
                            ? "border-[#f52d2d] "
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="mt-1 mb-2 text-xs text-[#f52d2d]"
                      />
                    </div>
                    <div className="mb-5 relative">
                      <Field
                        name="password"
                        type={passwordState}
                        placeholder="password"
                        className={
                          "w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none " +
                          (errors.password && touched.password
                            ? "border-[#f52d2d] "
                            : "")
                        }
                      />
                      <img
                        src={images.password}
                        alt="password"
                        className="cursor-pointer absolute top-1 right-3"
                        onClick={handleViewPassword}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="mt-1 mb-2 text-xs text-[#f52d2d]"
                      />
                    </div>
                    <div className="mb-10">
                      <Field
                        name="country"
                        as="select"
                        className={
                          "w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none " +
                          (errors.country && touched.country
                            ? "border-[#f52d2d] "
                            : "")
                        }
                      >
                        <option value="" default>
                          Select Country
                        </option>
                        {country_list &&
                          country_list.map((country) => (
                            <option value={country}>{country}</option>
                          ))}
                      </Field>
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="mt-1 mb-2 text-xs text-[#f52d2d]"
                      />
                    </div>
                  </div>
                  <div className=" m-auto">
                    <div className="w-[60%] m-auto">
                      <Button text="Create Account" />
                    </div>
                    <p className="text-center my-3 md:block hidden">
                      Already have an account?
                      <Link to="/login" className="text-[#79F871]">
                        Log In
                      </Link>
                    </p>

                    <p className="text-center my-3 md:hidden">
                      {nextText}{" "}
                      <Link to={`/signup/${link}`} className="text-[#79F871]">
                        {connection}
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupContainer;
