import axios from 'axios';

export const getDogBreeds = async () => {
    try {
        return await axios.get('https://dog.ceo/api/breeds/list/all');
    } catch (e) {
        console.log(e);
        return {};
    }
}

export const getRandomImageByBreed = async breed => {
    try {
        return await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    } catch (e) {
        console.log(e);
        return {};
    }
}