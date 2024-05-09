import axios from 'axios';

export const getAllUsers = () => {
    return axios.get('http://localhost:3000/user/getAllUsers')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw error;
    });
};