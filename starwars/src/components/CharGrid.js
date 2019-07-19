import React from "react";
import CharCard from "./CharCard";
import { RWGrid } from "./RWStyles";

function CharGrid({ data }) {
  //   console.log("grid data", data);

  return (
    <RWGrid>
      {data.map(char => {
        return (
          <CharCard
            char={char.name}
            key={char.name}
            height={char.height}
            mass={char.mass}
            hair={char.hair_color}
            skin={char.skin_color}
            eyes={char.eye_color}
            gender={char.gender}
          />
        );
      })}
    </RWGrid>
  );
}
export default CharGrid;
