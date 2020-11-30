import React from "react";

// styles
import "../../../styles/styles.scss";

const Error = ({error}) => {
  console.log(error)
  return (
    <div className="errorContainer">
      
      <h2>Opss! error ${error}</h2>
    </div>
  );
};

export default Error;