import React from "react";

const ShipAttribute = (props) => {
  return (
    <label>
      <span></span>
    </label>
  )
}

const makeShips = (ships, errorFromResponse) => {
  return ships.map((ship, key) => {
    return (
      <Ship
        key={key}
        name={ship.name}
        model={ship.model}
        starshipClass={ship.starship_class}
      />
    );
  });
};

const Ship = (props) => {
  const { name, model, starshipClass } = { ...props };
  return (
    <section>
      <h3>Name: {name}</h3>
      <article>
        <section>
          <ShipAttribute />
          <h4>Model: {model}</h4>
          <h4>Starship Class: {starshipClass}</h4>
        </section>
      </article>
      <hr />
    </section>
  );
};

export default makeShips
