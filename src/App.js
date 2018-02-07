import React, { Component } from 'react';
import './App.css';
import RightText from "./components/right-text"
import us from "./images/SaveTheDateSplash2.png";
import Countdown from "./components/counter"

class App extends Component {

  componentDidMount(){
    document.title = "E&P";
  }
  render() {
    return (
      <div>
      <img id="container" src={us}/>
         <RightText />
         <Countdown/>
         </div>
    );
  }
}

export default App;
