import React, { useEffect, useState } from 'react';
import './BreedImagesPage.css';
import { useParams } from 'react-router-dom';
import { getBreedImages } from '../utils/utils'
import { Container } from 'react-bootstrap';

const BreedImagesPage = props => {
    const { breedName } = useParams();
    const [imageUrlList, setImageUrlList] = useState([]);

    useEffect(() => {
        loadData();
    }, [breedName]);

    const loadData = async () => {        
        try {
            const result = await getBreedImages(breedName);
            setImageUrlList(result.data.message);            
        } catch (e) {
            console.log(e)
        }                
    };

    return (
        <div className='breed-img-page'>
            <Container>
                {imageUrlList}
            </Container>            
        </div>
    );
}

export default BreedImagesPage;