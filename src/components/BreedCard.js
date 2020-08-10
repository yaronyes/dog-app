import React, { useEffect, useState } from 'react';
import './BreedCard.css';
import { Card, Image, Col } from 'react-bootstrap';
import { getRandomImageByBreed } from '../utils/utils';

const BreedsCard = props => {
    const { breed, enforceRandomImage } = props;
    const [image, setImage] = useState("https://previews.123rf.com/images/damedeeso/damedeeso1210/damedeeso121000006/15551999-placeholder-banner-dog.jpg");
    
    useEffect(() => {
        loadRandomImage(breed);
    }, [enforceRandomImage]);
    
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
        <div className="dog-card">
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