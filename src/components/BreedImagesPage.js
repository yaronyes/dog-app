import React, { useEffect, useState } from 'react';
import './BreedImagesPage.css';
import { useParams } from 'react-router-dom';
import { getBreedImages } from '../utils/utils'
import { Container, Col, Row } from 'react-bootstrap';
import ImageCard from './ImageCard';

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

    const imageToDraw = imageUrlList.map((image, i) => <Col key={i} lg={3} md={4} sm={6} className="image-col"><ImageCard imageUrl={image}/></Col>)

    return (
        <div className='breed-img-page'>
            <Container>
                <Row>
                    {imageToDraw}
                </Row>                
            </Container>            
        </div>
    );
}

export default BreedImagesPage;