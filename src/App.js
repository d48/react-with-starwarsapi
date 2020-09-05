import React, { useState, useEffect } from "react";
import "./styles.css";
import Ship from "./components/Ship";

const makeShips = (ships) => {
  return ships.map((ship) => {
    return (
      <Ship
        name={ship.name}
        model={ship.model}
        starshipClass={ship.starship_class}
      />
    );
  });
};

export default function App() {
  const [shipData, setShipData] = useState({
    count: 0,
    results: [],
  });

  useEffect(() => {
    fetch("http://swapi.dev/api/starships/?page=2")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShipData(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>List of Star Wars Starships</h1>
      <h2>Total # of ships: {shipData.count}</h2>
      {makeShips(shipData.results)}
    </div>
  );
}
