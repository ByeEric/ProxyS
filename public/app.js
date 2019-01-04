import React, { Component } from "react";
import ReactDOM from "react-dom";
import RelatedPetsWrapper from "./RelatedPets/RelatedPetsWrapper";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Hello People!</div>
        <RelatedPetsWrapper />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
