import React, { useState, useEffect } from "react";
import axios from "axios";
import CharGrid from "./components/CharGrid";
import Buttons from "./components/Buttons";
import { RWApp, RWHeader, RWSlogan } from "./components/RWStyles";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [api, setApi] = useState("https://swapi.co/api/people/");
  const [apiNext, setApiNext] = useState("");
  const [apiPrev, setApiPrev] = useState("");

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`${api}`)
      .then(response => {
        // console.log("starwars api", response.data.results);
        setData(response.data.results); //list of people objects
        // console.log(
        //   "api",
        //   response.data,
        //   response.data.next,
        //   response.data.previous
        // );
        setApiNext(response.data.next);
        setApiPrev(response.data.previous);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, [api]);

  const nextPage = event => {
    apiNext === null
      ? console.log("There is no next page")
      : event && setApi(apiNext);
    // console.log("clicked next");
  };

  const prevPage = event => {
    apiPrev === null
      ? console.log("There is no prev page")
      : event && setApi(apiPrev);
    // console.log("clicked prev");
  };

  return (
    <RWApp>
      <RWHeader>React Wars</RWHeader>
      <RWSlogan>
        Check out the stats of your favorite Star Wars characters
      </RWSlogan>
      <Buttons nextPage={nextPage} prevPage={prevPage} />
      <CharGrid data={data} />
    </RWApp>
  );
};

export default App;
