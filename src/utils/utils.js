import axios from 'axios';

export const getDogBreeds = async () => {
    try {
        return await axios.get('https://dog.ceo/api/breeds/list/all');
    } catch (e) {
        console.log(e);
    }
}