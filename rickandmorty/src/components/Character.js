// Write your Character component here
import React from "react";
import "./Character.css";

const Character = (props) => {
  const { c } = props;

  return (
    <div>
      <p>Name: {c.name}</p>
      <p>Species: {c.species}</p>
      <p>Gender: {c.gender}</p>
      <p>Status: {c.status}</p>
      <p>Origin: {c.origin.name}</p>
      <img src={c.image}></img>
    </div>
  );
};

export default Character;
