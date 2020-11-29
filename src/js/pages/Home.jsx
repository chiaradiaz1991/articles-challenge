import React, { useState, useEffect } from "react";

// Components
import CheckInput from "../components/CheckInput/CheckInput.jsx";
import Sort from "../components/Sort/Sort.jsx";
import Articles from "../components/Articles/Articles.jsx";

// APIs
const API_SPORTS = "http://localhost:6010/articles/sports";
const API_FASHION = "http://localhost:6010/articles/fashion";

const Home = () => {
  const [data, setData] = useState([]);
  const [dataSports, setDataSports] = useState([]);
  const [dataFashion, setDataFashion] = useState([]);
  const [selectedInput, setSelectedInput] = useState("all");
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [sortBy, setSortBy] = useState("asc");

  const fetchData = async () => {
    try {
      const [sports, fashion] = await Promise.all([
        fetch(API_SPORTS),
        fetch(API_FASHION),
      ]);
      const sportsJson = await sports.json();
      const fashionJson = await fashion.json();

      setDataSports(sportsJson.articles);
      setDataFashion(fashionJson.articles);
      setData([...sportsJson.articles, ...fashionJson.articles]);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchData();
  }, []);

  const handleStoreInput = (clicked, name) => {
    if (clicked && name == "sports") {
      setSelectedInput(name);
    } else if (clicked && name == "fashion") {
      setSelectedInput(name);
    } else {
      setSelectedInput("all");
    }
  };

  const sortResults = (orderBy) => {
    setSortBy(orderBy);
  };


  return (
    <div className="mainWrapper">
      <CheckInput
        storeValues={(clicked, name) => handleStoreInput(clicked, name)}
      />
      <Sort orderBy={(orderBy) => sortResults(orderBy)} />
      <Articles
        data={
          selectedInput === "sports"
            ? dataSports
            : selectedInput === "fashion"
            ? dataFashion
            : data
        }
        selectedInput={selectedInput}
        orderBy={sortBy}
      />
    </div>
  );
};

export default Home;
