import React from "react";
import CharCard from "./CharCard";
import styled from "styled-components";

const SWGrid = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-around;
  width: 90%;
`;

function CharGrid({ data }) {
  //   console.log("grid data", data);

  return (
    <SWGrid>
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
    </SWGrid>
  );
}
export default CharGrid;
