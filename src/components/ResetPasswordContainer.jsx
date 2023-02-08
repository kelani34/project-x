import Button from "./shared/Button";
import React, { useState } from "react";
import images from "../constants/images";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const ResetPasswordContainer = () => {
  const initialValues = {
    email: "",
  };
  function validationSchema() {
    return Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <div className="md:flex items-center justify-center h-full m-4">
        <div className="md:w-[60%] md:border-solid md:border md:border-[#CDD2D5] md:py-4 md:px-12">
          <div className="flex flex-col justify-center mt-10">
            <div className="flex justify-center">
              <Link to="/login">
                <img src={images.reset} alt="reset" />
              </Link>
            </div>
            <div className="flex flex-col justify-center ">
              <h1 className="md:font-semibold lg:text-[32px] md:text-[28px] text-[24px] text-center my-10">
                Reset Password
              </h1>
              <p className="text-center max-w-[404px] mx-auto mb-6">
                Kindly fill in the details associated with your account and we
                will send an OTP to reset your password.
              </p>
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
                      <div className="mb-10">
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
                    </div>
                    <div className=" m-auto mb-10">
                      <div className="md:w-[60%]  m-auto">
                        <Button text="Reset Password" />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordContainer;
