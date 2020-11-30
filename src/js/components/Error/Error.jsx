import React from "react";

// styles
import "../../../styles/styles.scss";

const Error = ({error}) => {
  return (
    <div className="errorContainer">
      <h2>{error}</h2>
    </div>
  );
};

export default Error;