import React from "react";
// styles
import "../../../styles/styles.scss";

const IMAGE_PLACEHOLDER = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg'

const Article = ({ image, title, date, content }) => {
  const emptyImage = image === "" ? IMAGE_PLACEHOLDER : image; 
  return (
    <article className="articleContainer">
      <img className="articleImage" src={emptyImage} alt="" />
      <div className="articleContent">
        <div className="articleHeader">
          <h2 className="articleTitle">{title}</h2>
          <time className="articleDate" dateTime={date} className="date">
            {date}
          </time>
        </div>
        <p className="articleText">{content}</p>
      </div>
    </article>
  );
};

export default Article;
