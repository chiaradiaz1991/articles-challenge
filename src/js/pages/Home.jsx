import React, { useState, useEffect } from "react";

// Components
import CheckInput from "../components/CheckInput/CheckInput.jsx";
import Sort from "../components/Sort/Sort.jsx";
import Article from "../components/Article/Article.jsx";

const API_SPORTS = "http://localhost:6010/articles/sports";
const API_FASHION = "http://localhost:6010/articles/fashion";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  
  const fetchData = async () => {
    try {
      const response = await fetch(API_SPORTS);
      console.log({response})
      const resJson = await response.json();
      console.log({resJson})
      setData(resJson.articles);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  };

  // Promise.all([
  //   fetch(url1).then(value => value.json()),
  //   fetch(url2).then(value => value.json())
  //   ])
  //   .then((value) => {
  //      console.log(value)
  //     //json response
  //   })
  //   .catch((err) => {
  //       console.log(err);
  //   });


  console.log({data})

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchData();
  }, []);

  return (
    <div className="mainWrapper">
      <CheckInput />
      <Sort />
      <Article />
    </div>
  );
};

export default Home;
