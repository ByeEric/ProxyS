import React, { Component } from "react";
import ReactDOM from "react-dom";
import RelatedPetsList from "./components/RelatedPetsList";
import { Grid, Row, Col } from "react-bootstrap/lib";
import SelectionTabs from "./components/SelectionTabs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pet_id: 1111
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    console.log("obligatory clicky!");
    this.setState(
      {
        pet_id: key
      },
      () => console.log(this.state.pet_id)
    );
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <SelectionTabs
              currentPet={this.state.pet_id}
              handleSelect={this.handleSelect}
            />
          </Col>
        </Row>

        <Row>
          <RelatedPetsList
            currentPet={this.state.pet_id}
            handleSelect={this.handleSelect}
          />
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
