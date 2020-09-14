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

  const getData = (url) => {
    fetchAPI(url
      , (data) => {
        console.log(data);
        setShipData(data);
      }
      , (error) => {
        setErrorMessage(error.toString())
      }
    )
  }

  useEffect(() => {
    getData("http://swapi.dev/api/starships/")
  }, []);


  return (
    <div className="App">
      <h1>List of Star Wars Starships</h1>
      <h2>Total # of ships: {shipData.count}</h2>
      <h3 key="error" className="error">{typeof errorMessage === 'string' ? errorMessage : ''}</h3>
      <NavBar next={shipData.next} previous={shipData.previous} onClickHandler={getData} />
      {makeShips(shipData.results)}
      <NavBar next={shipData.next} previous={shipData.previous} onClickHandler={getData}/>
    </div>
  );
}
