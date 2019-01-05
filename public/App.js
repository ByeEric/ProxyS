import React, { Component } from "react";
import ReactDOM from "react-dom";
import RelatedPetsList from "./components/RelatedPetsList";
import { Grid, Row, Col } from "react-bootstrap/lib";
import SelectionTabs from "./components/SelectionTabs";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pet_id: 1111,
      relatedPets: []
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.emitChangePetIdEvent = this.emitChangePetIdEvent.bind(this);
    this.getRelatedPets = this.getRelatedPets.bind(this);
  }

  componentDidMount() {
    this.getRelatedPets(this.state.pet_id);
  }

  emitChangePetIdEvent(pet_id) {
    [].forEach.call(document.getElementsByClassName("petIdSubscriber"), x =>
      x.dispatchEvent(new CustomEvent("changePetId", { detail: { pet_id } }))
    );
  }

  getRelatedPets(pet_id) {
    axios
      .get(
        `http://ec2-52-206-107-252.compute-1.amazonaws.com:3050/api/recommends/${pet_id}`
      )
      .then(response => {
        this.setState({ relatedPets: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSelect(key) {
    console.log("we got the pet: ", key);
    this.setState(
      {
        pet_id: key
      },
      () => {
        console.log("local and global state has been set to pet: ", key);
        this.emitChangePetIdEvent(key);
        this.getRelatedPets(this.state.pet_id);
      }
    );
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <SelectionTabs id="Tabs" handleSelect={this.handleSelect} />
          </Col>
        </Row>

        <Row>
          <RelatedPetsList
            id="Pets"
            relatedPets={this.state.relatedPets}
            handleSelect={this.handleSelect}
          />
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
