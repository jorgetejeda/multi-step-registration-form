import React, { useState } from "react";
import Confirmation from "./ Confirmation";
import PersonalForm from "./PersonalForm";
import UserForm from "./UserForm";
import Success from "./Success";

export default function Registration() {
  const [step, setSteps] = useState(1);
  const [fields, setFields] = useState({
    name: null,
    lastName: null,
    phoneNumber: null,
    user: null,
    email: null,
    password: null,
    address: null,
  });

  const nextStep = (e) => {
    e.preventDefault();
    setSteps(step + 1);
  };

  const previousStep = () => {
    setSteps(step - 1);
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <PersonalForm
          fields={fields}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <UserForm
          fields={fields}
          handleChange={handleChange}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      );
    case 3:
      return (
        <Confirmation
          fields={fields}
          handleChange={handleChange}
          previousStep={previousStep}
          nextStep={nextStep}
        />
      );
    case 4:
      return <Success fields={fields} previousStep={previousStep} />;
    default:
      return <h1>Unexpect Error</h1>;
  }
}