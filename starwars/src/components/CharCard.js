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
  font-size: 1.1rem;
`;

const CharCard = props => {
  const { char, height, mass, hair, skin, eyes, gender } = props;

  return (
    <RWCard>
      <h2>{char}</h2>
      <RWStats>
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
        <p>
          <strong>Gender:</strong> {gender}
        </p>
      </RWStats>
    </RWCard>
  );
};

export default CharCard;
