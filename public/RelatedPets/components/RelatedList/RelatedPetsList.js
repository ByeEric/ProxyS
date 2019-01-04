import React, { Component } from "react";
import { Col, Image } from "react-bootstrap/lib";

class RelatedPetsList extends Component {
  constructor() {
    super();
    this.state = {
      relatedPets: [
        {
          _id: "5c1f14fe79adc41e84650809",
          pet_id: 1111,
          class: "mammal",
          family: "Felidae",
          species: "Tiger",
          img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1111.jpg"
        },
        {
          _id: "5c1f14fe79adc41e8465080a",
          pet_id: 1112,
          class: "mammal",
          family: "Felidae",
          species: "Lion",
          img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1112.jpg"
        },
        {
          _id: "5c1f14fe79adc41e8465080b",
          pet_id: 1113,
          class: "mammal",
          family: "Felidae",
          species: "Jaguar",
          img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1113.jpg"
        },
        {
          _id: "5c1f14fe79adc41e8465080c",
          pet_id: 1114,
          class: "mammal",
          family: "Felidae",
          species: "Leopard",
          img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1114.jpeg"
        },
        {
          _id: "5c1f14fe79adc41e8465080d",
          pet_id: 1115,
          class: "mammal",
          family: "Felidae",
          species: "Snow Leopard",
          img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1115.jpeg"
        },
        {
          _id: "5c1f14fe79adc41e8465080e",
          pet_id: 1126,
          class: "mammal",
          family: "Felidae",
          species: "Cheeta",
          img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1126.jpg"
        },
        {
          _id: "5c1f14fe79adc41e8465080f",
          pet_id: 1137,
          class: "mammal",
          family: "Felidae",
          species: "Cougar",
          img_url: "https://s3.us-east-2.amazonaws.com/petpicks/1137.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.relatedPets.map(pet => (
          <Col md={1} xs={2} lg={1} key={pet.pet_id}>
            <Image width={100} height={55} src={pet.img_url} rounded />
            <sub>{pet.species}</sub>
          </Col>
        ))}
      </div>
    );
  }
}
export default RelatedPetsList;
