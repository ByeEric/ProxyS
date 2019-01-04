import React, { Component } from "react";
import RelatedPetsList from "./components/RelatedList/RelatedPetsList";
import { Grid, Row, Col } from "react-bootstrap/lib";
import SelectionTabs from "./components/SelectionTabs";

class RelatedPetsWrapper extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <SelectionTabs />
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

export default RelatedPetsWrapper;
