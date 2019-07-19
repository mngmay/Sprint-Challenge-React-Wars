import React, { useState } from "react";

const CharCard = props => {
  const { char, key, height, mass, hair, skin } = props;

  return (
    <div>
      <div>Character Name: {char} </div>
      <div>Height: {height}</div>
      <div>Mass: {mass}</div>
      <div>Hair Color: {hair}</div>
      <div>Skin Color: {skin}</div>
    </div>
  );
};

export default CharCard;
