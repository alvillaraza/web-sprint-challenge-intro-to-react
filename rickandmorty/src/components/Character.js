// Write your Character component here
import React from "react";

function Character(props) {
  const { character } = props;
  return (
    <div>
      {character.map((c) => {
        console.log(c);
        return (
          <div>
            <p>{c.name}</p>
            <p>{c.species}</p>
            <p>{c.gender}</p>
            <p>{c.status}</p>
            <p>{c.origin.name}</p>
            <img src={c.image}></img>
          </div>
        );
      })}
    </div>
  );
}

export default Character;
