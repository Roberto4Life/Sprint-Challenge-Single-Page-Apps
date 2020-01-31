import React from "react";
import { Card, CardText, CardBody, CardTitle, Row, Col } from "reactstrap";

const CharacterCard = ({ character }) => {

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <CardText>{character.species}</CardText>
          <CardText>{character.status}</CardText>
          <CardText>{character.gender}</CardText>
        </CardBody>
      </Card>
  </div>
  );
}

export default CharacterCard;