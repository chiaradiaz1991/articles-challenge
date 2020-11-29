import React from "react";

// images
import up from "../../../assets/up.svg";
import down from "../../../assets/down.svg";

const Sort = ({orderBy}) => {
  const handleClick = (direction) => {
    

  // console.log('sotred padre ', sortBy)
  // const x = [1, 6, 2, 10, 90, 0];
  // const res = x.sort((a, b) => {
  //   if (a < b) {
  //     return -1;
  //   }
  //   if (a > b) {
  //     return 1;
  //   }
  //   return 0;
  // });
  // console.log('res ', res)
  // return res;
  orderBy(direction);
  };


  return (
    <div className="">
      <span>Sort by date</span>
      <div className="arrowsContainer">
        <span onClick={() => handleClick("asc")}>
          <img src={up} alt="arrow-up" />
        </span>
        <span onClick={() => handleClick("des")}>
          <img src={down} alt="arrow-down" />
        </span>
      </div>
    </div>
  );
};

export default Sort;
