import React from "react";
import CharCard from "./CharCard";

function CharGrid({ data }) {
  console.log("grid data", data);

  return (
    <div>
      {data.map(char => {
        return (
          <CharCard
            char={char.name}
            key={char.name}
            height={char.height}
            mass={char.mass}
            hair={char.hair_color}
            skin={char.skin_color}
          />
        );
      })}
    </div>
  );
}
export default CharGrid;
