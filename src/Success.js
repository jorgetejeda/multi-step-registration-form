import React from "react";

export default function Success({ fields, previousStep }){
  return (
    <>
      <h1>Success</h1>
      <ul>
        {Object.values(fields).map((field, index) => (
          <li key={index}>{field}</li>
        ))}
      </ul>
      <button onClick={previousStep}>Back</button>
    </>
  );
};