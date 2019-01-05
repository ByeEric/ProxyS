import React, { Component } from "react";
import ReactDOM from "react-dom";
import RelatedPetsList from "./components/RelatedPetsList";
import { Grid, Row, Col } from "react-bootstrap/lib";
import SelectionTabs from "./components/SelectionTabs";
import axios from "axios";
require("dotenv").config({ path: __dirname + "/../.env" });

const API = process.env.RECOMMENDS_API;

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
      .get(`${API}/${pet_id}`)
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
