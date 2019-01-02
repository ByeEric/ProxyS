import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div>Hello People!</div>;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
