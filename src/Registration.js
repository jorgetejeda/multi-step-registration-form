import React from "react";
import Confirmation from "./ Confirmation";
import AccountsFields  from "./AccountFields";
import SurveyFields from "./SurveryFields";
import Success from "./Success";

const Registration = () => {
  const step = 4;
  switch (step) {
    case 1:
      return <AccountsFields />;
    case 2:
      return <SurveyFields/>;
    case 3:
      return <Confirmation/>;
    case 4:
      return <Success/>;
    default:
      return <h1>Unexpect Error</h1>;
  }
};

export default Registration;
