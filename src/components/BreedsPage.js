import React, { useEffect } from 'react';
import './BreedsPage.css';

const BreedsPage = props => {
    const { hideHeaderNavbar } = props;
 
    useEffect(() => {
        hideHeaderNavbar(false);
    }, [hideHeaderNavbar]);

    useEffect(() => {
        
    }, []);

    return (
        <div className="breeds-page"> 
            BreedsPage
        </div>
    );
}

export default BreedsPage;
