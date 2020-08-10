import React, { useEffect } from 'react';
import './HomePage.css';
import { Jumbotron, Button } from 'react-bootstrap';

const HomePage = props => {
    const { hideHeaderNavbar } = props;
 
    useEffect(() => {
        hideHeaderNavbar(true);
    }, [hideHeaderNavbar]);

    return (
        <div className="homepage">
            
            <Jumbotron>
                <h1>Dog Book</h1>
                <p className="j-description">
                    Men's Best Friend
                </p>
                <p>
                    <Button variant="outline-secondary" href="#/breeds">Woof!</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default HomePage;