import React, { useEffect, useState } from "react";
import Confirmation from "./ Confirmation";
import AccountsFields from "./AccountFields";
import SurveyFields from "./SurveryFields";
import Success from "./Success";

export default function Registration() {
  const [react, setReact] = useState("Bayron");

  const [step, setSteps] = useState(1);
  const [fields, setFields] = useState({
    name: null,
    email: null,
    password: null,
    age: null,
  });

  useEffect(() => {
    console.log('useEffect',fields);
  }, [fields]);

  const saveValues = (data) => {
    setFields((prevFields) => ({ ...prevFields, ...data }));
    console.log("incoming data", data);
    console.log("local data", fields);
  };

  const nextStep = () => {
    setSteps(step + 1);
  };

  const previousStep = () => {
    setSteps(step - 1);
  };

  const submitRegistration = () => {
    console.log("registro");
  };

  switch (step) {
    case 1:
      return (
        <div>
          <h1>{react}</h1>
          <AccountsFields
            fieldsValue={fields}
            saveValues={saveValues}
            nextStep={nextStep}
          />
          <button onClick={() => setReact("myName")}>React</button>
        </div>
      );
    case 2:
      return (
        <SurveyFields
          fieldsValue={fields}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      );
    case 3:
      return (
        <Confirmation
          fieldValues={fields}
          previousStep={previousStep}
          submitRegistration={submitRegistration}
        />
      );
    case 4:
      return <Success fieldValues={fields} />;
    default:
      return <h1>Unexpect Error</h1>;
  }
}
