import React, { useState } from "react";
import "./App.css";
import Weather from "./components/weather/Weather";
import Todo from "./components/todo/Todo";
import Quote from "./components/quote/Quote";
import tree from "./assets/background-images/tree.jpg";
import mountains from "./assets/background-images/mountains.jpg";
import dandelions from "./assets/background-images/dandelions.jpg";
import { Back, Next } from "./components/navButtons/Navbuttons";

const arr = [tree, mountains, dandelions];

function App() {
  const [bg, setBg] = useState(0);

  const next = () => {
    if (bg === arr.length - 1) {
      setBg(0);
    } else {
      setBg((prev) => prev + 1);
    }
  };
  const back = () => {
    if (bg === 0) {
      setBg(arr.length - 1);
    } else {
      setBg((prev) => prev - 1);
    }
  };

  return (
    <div classNameName="App" style={{ backgroundImage: `url(${arr[bg]})` }}>
      <header className="header">
        <h1 className="heading-portfolio">Weather App</h1>
      </header>
      <div className="row">
        <Back back={back}></Back>
        <div className="col">
          <div className="container">
            <Weather></Weather>
            <Todo></Todo>
            <Quote></Quote>
          </div>
        </div>
        <Next next={next}></Next>
      </div>
    </div>
  );
}

export default App;
