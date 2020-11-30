import React, { useEffect, useState } from "react";
import Article from "../Article/Article.jsx";
import "dayjs/locale/sv";
import dayjs from "dayjs";

// styles
import "../../../styles/styles.scss";

const Articles = (props) => {
  const { data, selectedInput, orderBy } = props;
  const [sorted, setSorted] = useState([]);

  const dateParsed = data.map((element) => {
    // if the date is not valid, I will not show it
    const validDates = dayjs(element.date).isValid();
    const item =
      validDates &&
      Object.assign({}, element, {
        parsedDate: new Date(element.date),
      });
    return item;
  });

  const sortedData = (articles) => {
    let articlesSorted;
    if (orderBy == "asc") {
      articlesSorted = articles.sort(
        (a, b) => new Date(a.parsedDate) - new Date(b.parsedDate)
      );
    } else if (orderBy == "des") {
      articlesSorted = articles.sort(
        (a, b) => new Date(b.parsedDate) - new Date(a.parsedDate)
      );
    }
    setSorted(articlesSorted);
    return articlesSorted;
  };

  useEffect(() => {
    sortedData(dateParsed);
  }, [orderBy, selectedInput]);

  return (
    <div className="articlesContainer">
      {selectedInput && sorted.length === 0
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
        : sorted
            .filter((filtered) => Object.values(filtered).length !== 0)
            .map((el) => {
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
    </div>
  );
};

export default Articles;
