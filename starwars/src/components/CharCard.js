import React from "react";
import styled from "styled-components";

const RWCard = styled.div`
  height: 40%;
  width: 25%;
  border: 2px solid #c2693f;
  margin: 10px;
  padding: 10px;
  background-color: rgba(211, 204, 187, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RWStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CharCard = props => {
  const { char, height, mass, hair, skin, eyes, gender } = props;

  return (
    <RWCard>
      <h3>{char}</h3>
      <RWStats>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Hair Color: {hair}</p>
        <p>Skin Color: {skin}</p>
        <p>Eye Color: {eyes}</p>
        <p>Gender: {gender}</p>
      </RWStats>
    </RWCard>
  );
};

export default CharCard;
