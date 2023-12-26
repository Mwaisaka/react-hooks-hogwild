
import React, { useState } from "react";
import HogDetails from "./HogDetails";
import { Card, Button } from "semantic-ui-react"; // import Semantic UI components

function HogCard({ hog }) {
  const [isHidden, setIsHidden] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  function handleDetailsClick() {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  }

  function handleHideClick() {
    setIsHidden(true);
  }

  // Conditionally render the hog
  if (isHidden) return null;

  const { name, specialty, image } = hog;

  return (
    <Card>
      <div className="image">
        <img src={image} alt="hogPic" />
      </div>
      <div className="content">
        <Card.Header>{name}</Card.Header>
        <div className="description">Specialty: {specialty}</div>
      </div>
      <div className="extra content">
        {showDetails ? <HogDetails hog={hog} /> : null}
        <Button onClick={handleDetailsClick}>
          {showDetails ? "Less Info" : "More Info"}
        </Button>
        <Button onClick={handleHideClick}>
          Hide Me <span role="img" aria-label="snout">🐽</span>
        </Button>
      </div>
    </Card>
  );
}

export default HogCard;
