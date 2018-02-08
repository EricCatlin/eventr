import React, { Component } from "react";
import "./App.css";
import RightText from "./components/right-text";
import us from "./images/SaveTheDateSplash2.png";
import Countdown from "./components/counter";
import  Splash  from "./components/splash";

class App extends Component {
  componentDidMount() {
    document.title = "E&P";
  }
  render() {
    return (
      <div id="container">
        <Splash />
        <RightText />
        <img id="background" src={us} />
        <Countdown />
      </div>
    );
  }
}

export default App;
