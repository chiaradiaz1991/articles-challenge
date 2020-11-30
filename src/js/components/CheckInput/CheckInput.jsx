import React, { useState } from "react";
// styles
import "../../../styles/styles.scss";

const CheckInput = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    const nameInput = e.target.name;
    const checkedInput = e.target.checked;
    setIsChecked(!isChecked);
    props.storeValues(checkedInput, nameInput);
  };

  return (
    <aside className="checkInputContainer">
      <h3 className="checkInputTitle">Data Sources</h3>
      <label>
        <input
          type="checkbox"
          name="sports"
          onClick={(e) => handleInputChange(e)}
          className="checkInput"
        />
        Sports
      </label>
      <label>
        <input
          type="checkbox"
          name="fashion"
          onClick={(e) => handleInputChange(e)}
          className="checkInput"
        />
        Fashion
      </label>
    </aside>
  );
};

export default CheckInput;
