import React from "react";
import styled from "styled-components";

const SWCard = styled.div`
  height: 40%;
  width: 30%;
  border: 2px solid #c2693f;
  margin: 10px;
`;

const CharCard = props => {
  const { char, height, mass, hair, skin } = props;

  return (
    <SWCard>
      <div>Character Name: {char} </div>
      <div>Height: {height}</div>
      <div>Mass: {mass}</div>
      <div>Hair Color: {hair}</div>
      <div>Skin Color: {skin}</div>
    </SWCard>
  );
};

export default CharCard;
