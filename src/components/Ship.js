import React from "react";

const Ship = (props) => {
  const { name, model, starshipClass } = { ...props };
  return (
    <section>
      <h3>Name: {name}</h3>
      <article>
        <section>
          <h4>Model: {model}</h4>
          <h4>Starship Class: {starshipClass}</h4>
        </section>
      </article>
      <hr />
    </section>
  );
};

export default Ship;
