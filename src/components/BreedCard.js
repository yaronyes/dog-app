import React, { useEffect, useState } from 'react';
import './BreedCard.css';
import { Card } from 'react-bootstrap';
import { getRandomImageByBreed } from '../utils/utils';

const BreedsCard = props => {
    const { breed, enforceRandomImage } = props;
    const [image, setImage] = useState("https://www.austinpetsalive.org/assets/placeholder/dog-placeholder-tall.svg");
    
    useEffect(() => {
        loadRandomImage(breed);
    }, [enforceRandomImage]);
    
    const loadRandomImage = async breed => {
        try {
            const result = await getRandomImageByBreed(breed);
            return result.data.message;
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
                <Card.Text>
                    {enforceRandomImage}
                </Card.Text>
            </Card.Body>  
            </Card>
        </div>
    )
}

export default BreedsCard;