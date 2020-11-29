import React from "react";

const Article = ({ image, title, date, content }) => {
  return (
    <div className="articleContainer">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <time dateTime={date} className="date">
        {date}
      </time>
      <p>{content}</p>
    </div>
  );
};

export default Article;
