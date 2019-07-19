import React from "react";
import { RWCard, RWStats } from "./RWStyles";

const CharCard = props => {
  const { char, height, mass, hair, skin, eyes, gender, bday } = props;

  return (
    <RWCard>
      <h2>{char}</h2>
      <RWStats>
        <p>
          <strong>Birthday:</strong> {bday}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Mass:</strong> {mass}
        </p>
        <p>
          <strong>Hair Color:</strong> {hair}
        </p>
        <p>
          <strong>Skin Color:</strong> {skin}
        </p>
        <p>
          <strong>Eye Color:</strong> {eyes}
        </p>
      </RWStats>
    </RWCard>
  );
};

export default CharCard;
