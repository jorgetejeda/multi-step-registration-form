import React from "react";

export default function UserForm({ fields, handleChange, nextStep, previousStep }) {
  return (
    <div>
      <h1>Create User - Step 2</h1>
      <form onSubmit={nextStep}>
        <div className="form-group">
          <label htmlFor="user">User</label>
          <input
            type="text"
            name="user"
            defaultValue={fields.user}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user">Email</label>
          <input
            type="text"
            name="email"
            defaultValue={fields.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user">Password</label>
          <input
            type="text"
            name="password"
            defaultValue={fields.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={previousStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </form>
    </div>
  );
}