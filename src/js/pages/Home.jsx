import React, { useState, useEffect } from "react";

// Components
import CheckInput from "../components/CheckInput/CheckInput.jsx";
import Sort from "../components/Sort/Sort.jsx";
import Articles from "../components/Articles/Articles.jsx";
import Loading from "../components/Loading/Loading.jsx";
import Error from '../components/Error/Error.jsx';

// APIs
const API_SPORTS = "http://localhost:6010/articles/sports";
const API_FASHION = "http://localhost:6010/articles/fashion";

// styles
import "../../styles/styles.scss";

const Home = () => {
  const [data, setData] = useState([]);
  const [dataSports, setDataSports] = useState([]);
  const [dataFashion, setDataFashion] = useState([]);
  const [selectedInput, setSelectedInput] = useState("all");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [errorCode, setErrorCode] = useState();
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
      setErr(false);
    } catch (error) {
      setErrorCode(error);
      setErr(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setErr(false);
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

  const showLoading = loading && <Loading />;
  
  return (
    <div className="mainWrapper">
      {showLoading}
      {err  && <Error error={errorCode} />}
      <Sort orderBy={(orderBy) => sortResults(orderBy)} />
      <div className="content">
        <CheckInput
          storeValues={(clicked, name) => handleStoreInput(clicked, name)}
        />
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
    </div>
  );
};

export default Home;
