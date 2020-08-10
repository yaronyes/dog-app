import React, { useEffect, useState } from 'react';
import './BreedsPage.css';
import { getDogBreeds } from '../utils/utils';
import { Container, Row, Col } from 'react-bootstrap';
import BreedCard from './BreedCard';

const BreedsPage = props => {
    const { hideHeaderNavbar } = props;
    const [breeds, setBreeds] = useState([]);
    const [enforceRandomImage, setEnforceRandomImage] = useState(0);
    const [searchValue, setSearchValue] = useState("");
 
    useEffect(() => {
        hideHeaderNavbar(false);
    }, [hideHeaderNavbar]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {        
        try {
            const result = await getDogBreeds();
            const keys = Object.keys(result.data.message);
            setBreeds(keys);            
        } catch (e) {
            console.log(e)
        }                
    };

    const generateRandomNumber = () => {
        let randomNumber = Math.floor(Math.random() * 1101);
        while(randomNumber === enforceRandomImage) {
            randomNumber = Math.floor(Math.random() * 1101);
        }

        setEnforceRandomImage(randomNumber);
    }
    
    const filter = breeds.filter(breed => breed.toLowerCase().includes(searchValue.toLowerCase().trim()));
    const displayBreeds = filter.map((breed, i) => <Col key={i} lg={3} md={4} sm={6} className="breed-col"><BreedCard breed={breed} enforceRandomImage={enforceRandomImage}/></Col>);

    return (
        <div className="breeds-page"> 
            <Container>
                <Row className="search-row justify-content-between w-100">
                    <Col className="search-col" lg={4} sm={6}>                                   
                            <label htmlFor="search">Search</label>    
                            <input id="search" type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                    </Col>
                    <Col className="update-col" lg={2} sm={6}>                        
                        <button type="button" onClick={generateRandomNumber}>Update Images</button>
                    </Col>             
                </Row>
                <Row>
                    {displayBreeds}
                </Row>
            </Container>                        
        </div>
    );
}

export default BreedsPage;
