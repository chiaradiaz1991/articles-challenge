import React from "react";

// images
import up from "../../../assets/up.svg";
import down from "../../../assets/down.svg";

// styles
import "../../../styles/styles.scss";

const Sort = ({ orderBy }) => {
  const handleClick = (direction) => {
    orderBy(direction);
  };

  return (
    <div className="sortContainer">
      <span className="instruction">Sort by date</span>
      <div className="arrowsContainer">
        <span className="arrow" onClick={() => handleClick("asc")}>
          <img src={up} alt="arrow-up" />
        </span>
        <span className="arrow" onClick={() => handleClick("des")}>
          <img src={down} alt="arrow-down" />
        </span>
      </div>
    </div>
  );
};

export default Sort;
