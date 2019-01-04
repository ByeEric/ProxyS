import React, { Component } from "react";
import RelatedPetsList from "./components/RelatedList/RelatedPetsList";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

// import SelectionTabs from "./components/SelectionTabs";

class RelatedPetsWrapper extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Grid>
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
