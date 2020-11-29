import React, { useState } from "react";

const CheckInput = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    const nameInput = e.target.name;
    const checkedInput = e.target.checked;
    setIsChecked(!isChecked);
    props.storeValues(checkedInput, nameInput);
  };

  return (
    <div className="checkInputContainer">
      <label>
        <input
          type="checkbox"
          name="sports"
          onClick={(e) => handleInputChange(e)}
          className="checkInput"
        />
        Sports
      </label>
      <input
        type="checkbox"
        name="fashion"
        onClick={(e) => handleInputChange(e)}
        className="checkInput"
      />
      <label>Fashion</label>
    </div>
  );
};

export default CheckInput;
