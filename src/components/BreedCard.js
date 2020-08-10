import React, { useEffect, useState } from 'react';
import './BreedCard.css';
import { Card, Image } from 'react-bootstrap';
import { getRandomImageByBreed } from '../utils/utils';
import { useHistory } from "react-router-dom";

// Component for drawing card with breed name and random image
// Props:
// breed - string - the breed name to display
// enforceRandomImage = number - random number to trigger render in order to load new image
// State:
// image - string - the url for the image
const BreedsCard = props => {
    const { breed, enforceRandomImage } = props;
    const [image, setImage] = useState("https://previews.123rf.com/images/damedeeso/damedeeso1210/damedeeso121000006/15551999-placeholder-banner-dog.jpg");
    const history = useHistory();
    
    useEffect(() => {
        loadRandomImage(breed);        
    }, [breed, enforceRandomImage]);
       
    const loadRandomImage = async breed => {
        try {
            const result = await getRandomImageByBreed(breed);
            setImage(result.data.message);
        } catch (e) {
            console.log(e)
            return "";
        }
    };

    return (
        <div className="dog-card" onClick={() => history.push(`/breeds/${breed}`)}>
            <Card>
            <Card.Body>
                <Card.Title>{breed}</Card.Title>                   
                <Image src={image} thumbnail={true} className="dog-image" />
            </Card.Body>  
            </Card>                        
        </div>
    )
}

export default BreedsCard;