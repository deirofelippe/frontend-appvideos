import React from "react";

const ErrorsList = ({ errors }) => {
  const listErrors = Object.entries(errors);
  return (
    <ul>
      {listErrors.map(([key, value]) => (
        <li>
          <strong>{key.toUpperCase()}</strong>: {value.join(", ")}
        </li>
      ))}
    </ul>
  );
};

export default ErrorsList;
