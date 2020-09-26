import React, { useState } from "react";

const AccountsFields = ({ fieldsValue, saveValues, nextStep }) => {
  const [input, setInput] = useState({
    name: null,
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const saveAndContinue = () => {
    saveValues(input);
    nextStep();
  };
  return (
    <div>
      <h1>Account - Step 1</h1>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          defaultValue={fieldsValue.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          defaultValue={fieldsValue.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="password"
          defaultValue={fieldsValue.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <button onClick={saveAndContinue}>Save and continue</button>
    </div>
  );
};

export default AccountsFields;
