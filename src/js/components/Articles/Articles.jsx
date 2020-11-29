import React from "react";
import Article from "../Article/Article.jsx";

const Articles = (props) => {
  const { data, selectedInput } = props;
  return (
    <div>
      {selectedInput === "all"
        ? data.map((el) => {
            return (
              <Article
                key={el.id}
                image={el.image}
                title={el.title}
                date={el.date}
                content={el.preamble}
              />
            );
          })
        : data.map((el) => {
            return (
              <Article
                key={el.id}
                image={el.image}
                title={el.title}
                date={el.date}
                content={el.preamble}
              />
            );
          })}

      {/* {dataSports && selectedInput == 'sports' &&
        dataSports.map((el) => {
          return (
            <Article
              image={el.image}
              title={el.title}
              date={el.date}
              content={el.preamble}
            />
          );
        })} */}
    </div>
  );
};

export default Articles;
