import React, { Component} from "react";
import "./App.css";

class App extends Component{
    render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <h1 className="border border-red-400"> Hello, World! </h1>
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    );
  }

}

export default App;
