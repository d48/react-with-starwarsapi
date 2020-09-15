import React, { useState, useEffect } from "react";
import "./styles.css";
import makeShips from "./components/Ship";
import NavBar from "./components/NavBar";
import fetchAPI from "./service/index.js";
import "./css/App.css";

export default function App() {
  const [shipData, setShipData] = useState({
    count: 0,
    results: [],
  });

  const [errorMessage, setErrorMessage] = useState(null)
  const [pageTotal, setPageTotal] = useState(0)

  const processData = (data) => {
    console.log(data);
    setShipData(data);
  }

  const processError = (error) => {
    setErrorMessage(error.toString())
  }

  const getData = (url) => {
    fetchAPI(url
      , processData
      , processError
    )
  }

  useEffect(() => {
    fetchAPI("http://swapi.dev/api/starships/"
      , (data) => {
        processData(data)
        setPageTotal(Math.ceil(data.count / data.results.length))
      }
      , processError
    )
  }, []);

  return (
    <div className="App">
      <h1>List of Star Wars Starships</h1>
      <h2>Total # of ships: {shipData.count}</h2>
      <h3 key="error" className="error">{typeof errorMessage === 'string' ? errorMessage : ''}</h3>
      <NavBar next={shipData.next} previous={shipData.previous} onClickHandler={getData} pageTotal={pageTotal} />
      {makeShips(shipData.results)}
      <NavBar next={shipData.next} previous={shipData.previous} onClickHandler={getData} pageTotal={pageTotal} />
    </div>
  );
}
