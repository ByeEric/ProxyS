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
            <SelectionTabs handleSelect={this.handleSelect} />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={8} xs={16}>
            <h1>Recommended Pets</h1>
          </Col>
        </Row>
        <div>
          <Row>
            <RelatedPetsList />
          </Row>
        </div>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
