import axios from 'axios';

export const showStructureByCategorie = () => {
    return axios.get('http://localhost:3000/structure/getStructureByCategorie/depistage')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw error;
    })
};

export const showAllStructures = () => {
    return axios.get('http://localhost:3000/structure/getAllStructures')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw error;
    })
};
