import React from "react";

export default function Confirmation({
  fields,
  handleChange,
  nextStep,
  previousStep,
}) {
  return (
    <div>
      <h1>Confirmation - Step 3</h1>
      <form onSubmit={nextStep}>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            defaultValue={fields.address}
            name="address"
            onChange={handleChange}
          />
        </div>
        <button onClick={previousStep}>Back</button>
        <button onClick={nextStep}>Save and continue</button>
      </form>
    </div>
  );
}