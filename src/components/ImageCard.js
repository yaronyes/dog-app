import React, { useState } from 'react';
import './ImageCard.css';
import { Card, Image, Modal } from 'react-bootstrap';

// Component for drawing card with image
// Props:
// imageUrl - string - the url for the image 
// State:
// show - boolean - showing the modal dialog
const ImageCard = props => {
    const { imageUrl } = props;
    const [show, setShow] = useState(false);
    
    return (
        <div className="image-card" onClick={() => setShow(!show)}>
            <Card>
                <Card.Body>
                    <Image src={imageUrl} thumbnail={true} className="dog-image-card" />
                </Card.Body>  
            </Card>

            <Modal size="lg" show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton/>                                
                <Modal.Body>
                    <Image src={imageUrl} className="large-dog-image" fluid={true}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ImageCard;