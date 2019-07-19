import React, { useState, useEffect } from "react";
import axios from "axios";
import CharGrid from "./components/CharGrid";
import styled from "styled-components";
import "./App.css";

const RWApp = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const RWHeader = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const RWSlogan = styled.h3``;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        // console.log("starwars api", response.data.results);
        setData(response.data.results); //list of people objects
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  return (
    <RWApp>
      <RWHeader>React Wars</RWHeader>
      <RWSlogan>
        Check out the stats of your favorite Star Wars characters
      </RWSlogan>
      <CharGrid data={data} />
    </RWApp>
  );
};

export default App;
