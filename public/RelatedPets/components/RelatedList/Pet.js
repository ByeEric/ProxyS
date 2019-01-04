import React from "react";
import Image from "react-bootstrap/lib/Image";

const Pet = function(props) {
  return (
    <div>
      <Image width={100} height={55} src={props.pet.img_url} rounded />
      <sub>{props.pet.species}</sub>
    </div>
  );
};

export default Pet;
