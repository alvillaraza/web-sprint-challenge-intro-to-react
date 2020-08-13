import React, { useState } from "react";
import styled from 'styled-components'
import Character from "./Character";

function CharacterContainer(props) {
  const { characters } = props;
  const [isActive, setIsActive] = useState(0);

  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  return (
    <div>
      <div className="button-container">
        <Button
          onClick={() => {
            if (isActive === 0) {
              setIsActive(characters.length - 1);
            } else {
              setIsActive(isActive - 1);
            }
          }}
        >
          Prev
        </Button>

        <Button
          onClick={() => {
            // console.log("charc", character);
            if (characters.length - 1 === isActive) {
              setIsActive(0);
            } else {
              setIsActive(isActive + 1);
            }
          }}
        >
          Next
        </Button>
      </div>

      {characters.map((c, index) => {
        if (index === isActive) {
          return <Character c={c} />;
        }
      })}
    </div>
  );
}

export default CharacterContainer;
