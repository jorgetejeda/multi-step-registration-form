import React from "react";

export default function PersonalForm({ fields, handleChange, nextStep }) {
  return (
    <div>
      <h1>Personal - Step 1</h1>
      <form onSubmit={nextStep}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            defaultValue={fields.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            defaultValue={fields.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            defaultValue={fields.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Save and continue
        </button>
      </form>
    </div>
  );
}