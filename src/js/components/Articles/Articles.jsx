import React, { useEffect, useState } from "react";
import Article from "../Article/Article.jsx";
import "dayjs/locale/sv";
import dayjs from "dayjs";
// const locale = dayjs.locale('sv');

const Articles = (props) => {
  const { data, selectedInput, orderBy } = props;
  const [ sorted, setSorted] = useState('');


  const dateParsed = data.map((element) => {
    return { ...element, date: dayjs(element.date).locale("sv-se").format() };
  });

  const sortedData = (articles) => {
    let articlesSored;
    if (orderBy == "asc") {
      articlesSored= articles.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (orderBy == "des") {
      articlesSored= articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setSorted(articlesSored)
    return articlesSored;
  };

  console.log({sorted})
  useEffect(() => {
    sortedData(dateParsed);
  }, [orderBy]);


  return (
    <div>
      {selectedInput === "all"
      //sorted.map
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
