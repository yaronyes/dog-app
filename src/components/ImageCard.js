import React from 'react';
import './ImageCard.css';
import { Card, Image } from 'react-bootstrap';


// Component for drawing card with image
// Props:
// breed - string - the breed name to display
// enforceRandomImage = number - random number to trigger render in order to load new image
// State:
// image - string - the url for the image
const ImageCard = props => {
    const { imageUrl } = props;

    return (
        <div className="image-card">
            <Card>
            <Card.Body>
                <Image src={imageUrl} thumbnail={true} className="dog-image" />
            </Card.Body>  
            </Card>
        </div>
    )
}

export default ImageCard;