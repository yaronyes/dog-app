import React, { useEffect } from 'react';
import './BreedsPage.css';
import { getDogBreeds } from '../utils/utils';

const BreedsPage = props => {
    const { hideHeaderNavbar } = props;
 
    useEffect(() => {
        hideHeaderNavbar(false);
    }, [hideHeaderNavbar]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const result = await getDogBreeds();
        const breeds = Object.keys(result.data.message);
        console.log(breeds)
    };

    return (
        <div className="breeds-page"> 
            BreedsPage
        </div>
    );
}

export default BreedsPage;
