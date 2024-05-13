import axios from 'axios';

export const showStructureByCategorie = () => {
    return axios.get('http://localhost:3000/structure/getStructureByCategorie/categorie')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw error;
    })
};

