import React from "react";
import { SignupContainer } from "../components";

const EmployerSignupLayout = () => {
  return (
    <div>
      <SignupContainer
        title="Employ Trusted Interns"
        link="intern"
        connection="Connect as Intern"
        nextText="Want to be employed?"
      />
    </div>
  );
};

export default EmployerSignupLayout;
